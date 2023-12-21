function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

var preloaderWords = ["Hello", "ආයුබෝවන්", "வணக்கம்", "नमस्ते", "Hola", "안녕하세요", "Γειά σου", "Bonjour", "مرحبًا", "Hallo", "नमस्कार"];
var currentWordIndex = 0;

function hidePreloader() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}

function updatePreloaderWord() {
  var preloaderText = document.getElementById('preloader-text');
  preloaderText.innerText = preloaderWords[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % preloaderWords.length;
}

window.addEventListener('load', function () {
  setTimeout(function () {
    hidePreloader();
  }, 4000);

  setInterval(updatePreloaderWord, 250);
});


var currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = 'Copyright &#169; ' + currentYear + ' Shahiru Roshen. All Rights Reserved.';
