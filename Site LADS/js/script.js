/*troca tema claro/escuro*/
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const currentTheme = localStorage.getItem("theme");

    function updateThemeIcon(isDark) {
        themeIcon.src = isDark ? "../img/moon.svg" : "../img/sun.svg";
    }

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeIcon(true);
    }

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeIcon(isDark);
    });
});

