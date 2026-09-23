const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateTheme() {
  const dark = root.dataset.theme === "dark";
  toggle.setAttribute("aria-pressed", dark);
  toggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
  toggle.title = `Switch to ${dark ? "light" : "dark"} theme`;
  themeColor.content = dark ? "#18212b" : "#ffffff";
}

toggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  updateTheme();
});

updateTheme();
