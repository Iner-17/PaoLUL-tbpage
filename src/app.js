document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.onclick = () => {
    let navBar = document.querySelector(".nav");
    if (navBar.className === "nav") {
      navBar.className += " responsive-nav";
    } else {
      navBar.className = "nav";
    }
  };
});
