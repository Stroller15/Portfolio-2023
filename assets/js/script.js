// Menu show or hidden
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Colour change
let huecolor = 0;
setInterval(() => {
  if (huecolor < 360) {
    ++huecolor;
  } else {
    huecolor = 0;
  }
  document.documentElement.style.setProperty("--hue-colour", huecolor);
}, 100);

//Menu Show
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

//Menu Hidden
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

// Accordion Skills
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills-header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills-open");
  });
});

// Qualification
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--first-colour)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-colour)";
    educationheader.style.color = "var(--first-colour)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-colour)";
    workheader.style.color = "var(--first-colour)";
  }
});
/*---------------------  Portfolio swiper js ---------------------------- */
let swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*--------------------- Show Scroll---------------------------- */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*--------------------- Dark Theme---------------------------- */

// Activate/ Deactivate the theme manually with the button

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

themeButton.addEventListener("click", function () {
  //Add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the curent icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

function submitForm(e) {
  console.log(e);
  e.preventDefault();
  document.getElementById("contact-form").submit();

}



