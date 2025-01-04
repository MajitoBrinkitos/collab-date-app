 //dark-light mode
 document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('bd-theme');
    const themeOptions = document.querySelectorAll('[data-bs-theme-value]');

    //user's theme preference
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme){
        document.documentElement.setAttribute('data-bs-theme', currentTheme);
        document.getElementById('bd-theme-text').innerText = `Toggle theme (${currentTheme})`;
    }

    //Theme toggle button
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-bs-theme-value');
            document.documentElement.setAttribute('data-bs-theme', theme);
            document.getElementById('bd-theme-text').innerText = `Toggle theme (${theme})`;
            localStorage.setItem('theme', theme);

            //update button
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
 });

 //Header Buttons
 //iOS Btn
 document.getElementById("iosBtn").onclick = function () {
    alert("Downloading iOS mobile version");
}

//andBtn
document.getElementById("andBtn").onclick = function () {
    alert("Downloading Android mobile version");
}