(function () {
  // Logic: Cycle between System -> Light -> Dark
  const button = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const text = document.getElementById("theme-text");
  const root = document.documentElement;

  // Available themes
  const themes = ["system", "light", "dark"];

  // Get current theme from storage or default to system
  function getStoredTheme() {
    return localStorage.getItem("theme") || "system";
  }

  function setTheme(theme) {
    if (theme === "system") {
      root.removeAttribute("data-theme");
      text.textContent = "System";
      icon.textContent = "◐";
      localStorage.removeItem("theme");
    } else {
      root.setAttribute("data-theme", theme);
      text.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
      icon.textContent = theme === "dark" ? "aaa" : "aaa"; // Simplified icon logic
      // Update icons explicitly
      icon.textContent = theme === "dark" ? "☾" : "☀";
      localStorage.setItem("theme", theme);
    }
  }

  // Initialize
  let currentThemeIndex = themes.indexOf(getStoredTheme());
  // If stored value is invalid, reset to 0
  if (currentThemeIndex === -1) currentThemeIndex = 0;

  setTheme(themes[currentThemeIndex]);

  // Click Handler
  button.addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[currentThemeIndex]);
  });
})();
