function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

document.querySelector('.menu-button').addEventListener('click', toggleMenu);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function changeImageSource() {
    const image = document.querySelector('.main-banner img');
    if (window.matchMedia("(max-width: 768px)").matches) {
        image.src = '/Users/hannahansen/Desktop/School/Spring 2024/CS 2550 - Web Programming 1/Projects/Project 3 - Responsive Web Site-Topic of your Choice/5G3A4524small.jpg'; // Path to the smaller image for mobile devices
    } else {
        image.src = '/Users/hannahansen/Desktop/School/Spring 2024/CS 2550 - Web Programming 1/Projects/Project 3 - Responsive Web Site-Topic of your Choice/5G3A4524.jpg'; // Path to the larger image for desktop
    }
}

changeImageSource();
window.addEventListener('resize', changeImageSource);
