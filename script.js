// 1. Run this immediately to sync the button text on page load
function syncToggleButton() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    if (document.documentElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
}

// 2. Set up the click interactions once the DOM elements exist
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    // Sync button text right away when the page finishes loading
    syncToggleButton();

    // Handle clicks to toggle themes and update localStorage
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-theme');
        
        if (document.documentElement.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    });
});