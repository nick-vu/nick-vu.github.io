/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("menubutt").classList.add("d-none");
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menubutt").classList.remove("d-none");
}