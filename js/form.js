function verifyContent(formInput) {
  /*
    Por cada input, realizamos los tests en funcion de si son nombre o apellido (solamente se revisa la longitud del campo)
    En caso de ser contraseña o email, se realiza un test diferente.
    El campo 'name' del input coincide con el campo 'id' del 'div' que lo contiene. Por eso,
    cuando hacemos getElementById('e.name') obtenemos el div padre.
  */
  const name = formInput.find(e => e.name === "username");
  const res = formInput.every(e => {
    //Si todos los valores son true, devuelve true
    //Si uno es false, devuelve false
    if (e.name != "password" && e.name != "email") {
      if (e.value.length < 5) {
        createMessage(e);
        return false;
      }
    }
    if (e.name == "password") {
      if (!validatePassword(e.value)) {
        createMessage(e);
        return false;
      }
    }
    if (e.name == "email") {
      if (!validateEmail(e.value, name.value)) {
        createMessage(e);
        return false;
      }
    }

    const avisoError = document
      .getElementById(e.name)
      .getElementsByClassName("campo-erroneo")[0];
    //Arriba hemos obtenido el error en caso de que exista, para que si el usuario lo ha corregido, no le
    //siga mostrando el error
    hideDiv(avisoError);

    return true;
  });

  return res;
}

function createMessage(element) {
  //Creamos el mensaje de error y lo mostramos en pantalla
  let div = document.createElement("div"); //div a insertar
  let sourceElement = document.getElementById(element.name);
  const sourceAttr = sourceElement.getAttribute("message");
  if (sourceAttr === "false" || !sourceAttr) {
    div.className = "campo-erroneo alert alert-danger alert-dismissible";
    div.innerHTML = `<button onclick="hideDiv(this.parentNode)" type="button" class="close" data-dismiss="alert"> &times </button>\
    ${errors[element.name]}`;
    sourceElement.appendChild(div);
    sourceElement.setAttribute("message", "true");
    sourceElement.getElementsByTagName("input")[0].focus();
  }
}

function validatePassword(password) {
  const regex = new RegExp(
    //\D
    "^(?=.*[0-9]+.*)(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(?=.*[!@#$%^&*(),.?:{}|<>]+.*)[0-9a-zA-Z!@#$%^&*(),.?:{}|<>]{8,}$"
  );
  if (!regex.test(password)) {
    console.log(errors["password"]);
    return false;
  }
  return true;
}

function hideDiv(div) {
  //Eliminamos el div con el mensaje de error.
  if (!div) return false;
  div.parentNode.setAttribute("message", "false");
  div.parentNode.removeChild(div);
}

function validateEmail(email, name) {
  const regex = new RegExp(
    `^${name.toLowerCase()}@[a-zA-Z]{3,7}.[a-zA-Z]{2,3}$`
  );
  if (!regex.test(email.toLowerCase())) {
    console.log(errors["email"]);
    return false;
  }
  return true;
}

const errors = {
  name: "Nombre incorrecto. El campo debe tener al menos 5 carácteres",
  surname: "Apellido incorrecto. El campo debe tener al menos 5 carácteres.",
  username: "Nombre de usuario incorrecto. Debe de tener al menos 5 caracteres",
  email: "Email incorrecto. Debe de ser el mismo que el usuario",
  password:
    "Debe de tener 8 caracteres. Al menos con un digito, una mayuscula, una minuscula y un simbolo especial"
};

let form = document.getElementById("formularioContacto");
let formGroups = form.getElementsByClassName("form-group");
let inputs = form.getElementsByTagName("input");
let button = form.getElementsByTagName("button")[0];

form.onsubmit = e => {
  return verifyContent([...inputs]);
};
