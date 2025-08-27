// Mobile navigation (Hamburger Menu)
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Optional: Contact Form submission alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the form from submitting in the traditional way
        alert('Thank you for your message!');
        contactForm.reset(); // Clears the form fields
    });
}