let isDarkMode = true;

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    const modeText = document.getElementById('modeText');

    if (body.classList.contains('light')) {
        isDarkMode = false;
        modeIcon.innerHTML = '☀️'; 
        modeText.textContent = 'Light Mode';
    } else {
        modeIcon.innerHTML = '🌙'; 
        modeText.textContent = 'Dark Mode';
    }
});

function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    const modeText = document.getElementById('modeText');

    if (isDarkMode) {
        body.classList.remove('dark');
        body.classList.add('light');
        modeIcon.innerHTML = '☀️'; 
        modeText.textContent = 'Light Mode';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        modeIcon.innerHTML = '🌙'; 
        modeText.textContent = 'Dark Mode';
    }

    isDarkMode = !isDarkMode;
}

document.getElementById('toggleModeBtn').addEventListener('click', toggleMode);
