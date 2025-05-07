const NavBar = document.getElementById("nav");
const logo = document.getElementById("logo");
const nava = document.querySelectorAll(".nav-item");

function myFunction() {
  if (window.scrollY > 0) {
    NavBar.classList.add("bg-nav-scroll");
    logo.classList.add("icon-color-scroll");
    for (let i = 0; i < nava.length + 1; i++) {
      nava[i].classList.add("nav-item-scroll");
    }
  } else {
    NavBar.classList.remove("bg-nav-scroll");
    logo.classList.remove("icon-color-scroll");
    for (let i = 0; i < nava.length + 1; i++) {
      nava[i].classList.remove("nav-item-scroll");
    }
  }
}

const filter = document.querySelectorAll(".my-card ");
const filterBtn = document.querySelectorAll(".all-btn li a");

const filterCard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filter.forEach((ele) => {
    if (
      ele.getAttribute("data-name") == e.target.getAttribute("data-name") ||
      e.target.getAttribute("data-name") == "all"
    ) {
      ele.classList.remove("hide");
    } else {
      ele.classList.add("hide");
    }
  });
};

filterBtn.forEach((btn) => btn.addEventListener("click", filterCard));
