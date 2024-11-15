// JavaScript to add interactivity to collapsible sections and smooth scrolling

// Handle collapsible sections
const collapsibleButtons = document.querySelectorAll('.collapsible-button');
collapsibleButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Interactive hover effects for social buttons
const socialButtons = document.querySelectorAll('.social-buttons img');
socialButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.3)';
        button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});