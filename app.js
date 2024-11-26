
    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeIcon = document.querySelector('.close-icon');

        // Open Mobile Menu
        hamburger.addEventListener('click', () => {
            mobileMenu.style.left = '0'; // Slide in
        });

        // Close Mobile Menu
        closeIcon.addEventListener('click', () => {
            mobileMenu.style.left = '-100%'; // Slide out
        });
    });



 //This is for the animation in the services images section

 
    // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the testimonial-img class
    const testimonialImages = document.querySelectorAll('.testimonial-img');

    // Add the zoom-in class for entrance animation
    testimonialImages.forEach(img => {
        img.classList.add('zoom-in');
    });

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        testimonialImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible) {
                img.classList.add('scroll-animation'); // Add scroll animation class
            } else {
                img.classList.remove('scroll-animation'); // Remove it when out of view
            }
        });
    });
});
