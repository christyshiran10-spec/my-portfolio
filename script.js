document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // බ්‍රවුසර් එකේ කලින් save වුණු theme එක load කිරීම
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateButton(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        updateButton(newTheme);
    });

    function updateButton(theme) {
        themeToggleBtn.innerText = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
});