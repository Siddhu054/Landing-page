document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelector('.social-icons');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight / 2) {
            socialIcons.style.position = 'fixed';
            socialIcons.style.top = `${navbarHeight + 20}px`;
            socialIcons.style.transform = 'none';
        } else {
            socialIcons.style.position = 'fixed';
            socialIcons.style.top = '50%';
            socialIcons.style.transform = 'translateY(-50%)';
        }
    });

    // Get all navigation buttons and sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding section
            const sectionId = button.dataset.section;
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Handle Next button click
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Add your next button functionality here
            console.log('Next button clicked');
        });
    }
}); 