document.addEventListener("scroll", () => {
  let nav = document.getElementsByTagName("nav")[0];
  let scroll = document.documentElement.scrollTop;
  if (scroll > 500 || scroll > 500) {
    nav.style.backgroundColor = "rgb(255, 255, 255)";
    nav.style.borderBottomColor = "rgb(210, 210, 210)";
  } else {
    nav.style.backgroundColor = `rgba(255, 255, 255, ${scroll / 500 + 0.01})`;
    nav.style.borderBottomColor = `rgba(210, 210, 210, ${scroll / 500 + 0.01})`;
  }
});
