// Function to check if an element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add a class when an element is in view
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

// Listen to scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial call to trigger animation on page load
animateOnScroll();
