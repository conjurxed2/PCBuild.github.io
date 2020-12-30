const images = [
  ...document.getElementById("galeria").getElementsByTagName("img")
].map(e => e.addEventListener("click", e => displayImage(e.target))); //Agregamos el evento a todas las imagenes

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");

modal.addEventListener("click", e => {
  if (e.target.id != "modalImg") {
    modal.style.display = "none";
  }
});

function displayImage(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
}
