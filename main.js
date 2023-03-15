window.onload = getThemeFromLocalstorage;

function toogleMode() {
  const html = document.documentElement;
  let dark = !html.classList.contains("dark");

  html.classList.toggle("dark");
  console.log(dark);

  saveThemeToLocalstorage(dark);
}

function saveThemeToLocalstorage(theme) {
  localStorage.setItem("theme", theme);
}

function getThemeFromLocalstorage() {
  const theme = localStorage.getItem("theme");
  if (String(theme) == "true") {
    document.documentElement.classList.add("dark");
  }
}
