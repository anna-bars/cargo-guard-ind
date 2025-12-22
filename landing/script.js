// Mobile Menu Functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;
const tb = document.querySelector('.tb');

// Toggle menu function
function toggleMenu() {
    const isOpening = !hamburger.classList.contains('active');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Reset animations when closing
    if (!isOpening) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = '';
            }, 10);
        });
    }
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
const mobileLinks = document.querySelectorAll('.nav-item');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// Close menu when clicking on mobile buttons
const mobileButtons = document.querySelectorAll('.mobile-buttons button');
mobileButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Optional: Add a small delay before closing for better UX
        setTimeout(() => {
            toggleMenu();
        }, 300);
    });
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Optional: Close menu when clicking outside (on the faded toolbar)
tb.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') && e.target.closest('.hamburger') === null) {
        toggleMenu();
    }
});