//gsap
gsap.registerPlugin(ScrollTrigger);
 
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


//Gsap

//Navigation menu: ul > li > a
document.addEventListener('DOMContentLoaded', (event) => { 
    const navbarMenu = document.getElementById('navbarMenu'); 
    navbarMenu.addEventListener('show.bs.collapse', () => { 
        gsap.from('.ul-list li', { 
            duration: 2, 
            opacity: 0, 
            y: 50, 
            stagger: 0.25 
        }); 
    }); 
});


//h1: Collab
gsap.from('.gsapH1', {
    duration: 2,
    x: 300,
    ease: 'bounce'
});
gsap.to('.gsapH1', {
    duration: 2,
    rotation: 360
});



//ul > li >Meet new people, Collab, Connect gsapH1Li
gsap.from('.gsapH1Li', {
    duration: 2,
    x: 300,
    backgroundColor: '#E68369'
});

gsap.to('.gsapH1Li', {
    duration: 2,
    x: 0,
})

//gsapH1Lii
gsap.from('.gsapH1Lii', {
    duration: 2,
    x: -300,
    backgroundColor: '#E68369'
});
gsap.to('.gsapH1Lii', {
    duration: 2,
    x: 0,
    backgground: '#E68369'
});