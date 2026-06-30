// 1. පිටුවේ තියෙන බටන් එකේ Text එක නිවැරදිව Sync කරන Function එක
function syncToggleButton() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    if (document.documentElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
}

// 2. HTML පිටුව load වුණාම බටන් එකට click event එක එකතු කිරීම
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    // පේජ් එක load වුණු ගමන් බටන් එකේ text එක (ලෝගෝ එක) හරිගස්සන්න
    syncToggleButton();

    themeToggleBtn.addEventListener('click', () => {
        // Class එක toggle කිරීම
        document.documentElement.classList.toggle('dark-theme');
        
        // LocalStorage එකට සේව් කිරීම
        if (document.documentElement.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // බටන් එකේ text එක ආයෙත් අප්ඩේට් කිරීම
        syncToggleButton();
    });
});