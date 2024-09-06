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
        image.src = 'images/5G3A4524small.jpg'; // Path to the smaller image for mobile devices
    } else {
        image.src = 'images/5G3A4524.jpg'; // Path to the larger image for desktop
    }
}

document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Send email via EmailJS or another service
    emailjs.sendForm('hannahansenphotography', 'template_inquiry', this)
        .then(function() {
            displayInquiryMessage("Your inquiry has been sent successfully!", "success");
            document.getElementById('inquiry-form').reset();  // Reset the form
        }, function(error) {
            displayInquiryMessage('Failed to send inquiry: ' + JSON.stringify(error), "error");
        });
});

function displayInquiryMessage(message, type) {
    const inquiryMessage = document.getElementById('inquiry-message');
    inquiryMessage.style.display = 'block';  // Show the message

    // Change the color based on message type
    if (type === "success") {
        inquiryMessage.style.color = 'green';
    } else if (type === "error") {
        inquiryMessage.style.color = 'red';
    }

    inquiryMessage.textContent = message;

    // Hide the message after 5 seconds
    setTimeout(() => {
        inquiryMessage.style.display = 'none';
    }, 5000);
}


changeImageSource();
window.addEventListener('resize', changeImageSource);
