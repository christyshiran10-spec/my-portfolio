document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    
    // Browser එකේ කලින් Save කරපු Theme එකක් තියෙනවද බලනවා
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // ඒ Theme එක HTML එකට ඇප්ලයි කරනවා
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateButtonIcon(savedTheme);

    // Button එක click කරද්දී සිදුවන දේ
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'light';

            if (currentTheme === 'light') {
                newTheme = 'dark';
            }

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme); // Browser එකේ මතක තියාගන්නවා
            updateButtonIcon(newTheme);
        });
    }

    // හඳ සහ ඉර අයිකන් මාරු කරන Function එක
    function updateButtonIcon(theme) {
        if (!toggleBtn) return;
        if (theme === 'dark') {
            toggleBtn.textContent = '☀️'; // Dark mode නම් ඉර පෙන්වන්න
        } else {
            toggleBtn.textContent = '🌙'; // Light mode නම් හඳ පෙන්වන්න
        }
    }
});