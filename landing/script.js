// Mobile Menu Functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
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

// Close menu function
function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
    
    // Reset animations
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.style.animation = 'none';
        setTimeout(() => {
            item.style.animation = '';
        }, 10);
    });
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
mobileClose.addEventListener('click', closeMenu);

// Close menu when clicking on a link
const mobileLinks = document.querySelectorAll('.nav-item');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Small delay for visual feedback
        setTimeout(() => {
            closeMenu();
        }, 50); // Reduced from 300ms
    });
});

// Close menu when clicking on mobile buttons
const mobileButtons = document.querySelectorAll('.mobile-buttons button');
mobileButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Very small delay for better UX
        setTimeout(() => {
            closeMenu();
        }, 100); // Reduced from 300ms
    });
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Close menu when clicking on faded toolbar
tb.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') && e.target.closest('.hamburger') === null) {
        closeMenu();
    }
});

// Prevent scrolling when menu is open
window.addEventListener('scroll', () => {
    if (body.classList.contains('menu-open')) {
        window.scrollTo(0, 0);
    }
});