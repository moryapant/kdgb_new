// Modern JavaScript for KDGB Vidhyavriddhi Samaj website

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    loadNavbar();
    initDateDisplay();
    initMobileMenu();
    initSmoothScrolling();
    initNewsScroll();
    initAccessibilityFeatures();
});

// Load navbar from external file
function loadNavbar() {
    const navbarHTML = `
    <header>
      <div class="container">
        <div class="logo-container">
          <img src="logo/logo.jpg" alt="KDGB Vidhyavriddhi Samaj Logo" class="logo">
          <div class="date-display" id="currentDate"></div>
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="menu-icon">☰</span>
          </button>
        </div>

        <nav class="navbar" role="navigation">
          <ul class="nav-list" id="navList" role="menubar">
            <li role="none"><a href="index-modern.html" role="menuitem">मुख्य पृष्ठ</a></li>
            <li role="none"><a href="history-modern.html" role="menuitem">इतिहास</a></li>
            <li role="none"><a href="sheet-modern.html" role="menuitem">ताळेबंद</a></li>
            <li role="none"><a href="scolership-modern.html" role="menuitem">शिष्यवृत्ती</a></li>
            <li role="none"><a href="prize-modern.html" role="menuitem">पारितोषिक</a></li>
            <li role="none"><a href="donation-modern.html" role="menuitem">देणगी</a></li>
            <li role="none"><a href="member-modern.html" role="menuitem">सदस्यत्व</a></li>
            <li role="none"><a href="contact-modern.html" role="menuitem">संपर्क</a></li>
          </ul>
        </nav>
      </div>
    </header>`;
    
    // Find the navbar placeholder and replace it
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.outerHTML = navbarHTML;
        
        // Set active page after navbar is loaded
        setTimeout(setActivePage, 0);
    }
}

// Set active page in navigation
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Modern date display
function initDateDisplay() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        dateElement.textContent = now.toLocaleDateString('hi-IN', options);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');

    if (mobileMenuBtn && navList && menuIcon) {
        mobileMenuBtn.addEventListener('click', function () {
            const isActive = navList.classList.toggle('active');

            // Update button icon and aria-expanded
            menuIcon.textContent = isActive ? '✕' : '☰';
            this.setAttribute('aria-expanded', isActive);

            // Update accessibility
            if (isActive) {
                navList.setAttribute('aria-hidden', 'false');
                // Focus first menu item when opened
                const firstMenuItem = navList.querySelector('a');
                if (firstMenuItem) firstMenuItem.focus();
            } else {
                navList.setAttribute('aria-hidden', 'true');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!mobileMenuBtn.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                menuIcon.textContent = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navList.setAttribute('aria-hidden', 'true');
            }
        });

        // Close menu when clicking on nav links
        navList.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                navList.classList.remove('active');
                menuIcon.textContent = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navList.setAttribute('aria-hidden', 'true');
            }
        });

        // Handle escape key to close menu
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuIcon.textContent = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navList.setAttribute('aria-hidden', 'true');
                mobileMenuBtn.focus();
            }
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced news scrolling with pause on hover
function initNewsScroll() {
    const newsContent = document.querySelector('.news-content');

    if (newsContent) {
        let scrollSpeed = 1;
        let scrollDirection = 1;
        let isPaused = false;

        function autoScroll() {
            if (!isPaused) {
                newsContent.scrollTop += scrollSpeed * scrollDirection;

                // Reverse direction at top/bottom
                if (newsContent.scrollTop <= 0 ||
                    newsContent.scrollTop >= newsContent.scrollHeight - newsContent.clientHeight) {
                    scrollDirection *= -1;
                }
            }
        }

        // Start auto-scroll
        const scrollInterval = setInterval(autoScroll, 50);

        // Pause on hover
        newsContent.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        newsContent.addEventListener('mouseleave', () => {
            isPaused = false;
        });

        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            clearInterval(scrollInterval);
        });
    }
}

// Accessibility features
function initAccessibilityFeatures() {
    // Add keyboard navigation for custom elements
    const interactiveElements = document.querySelectorAll('.gallery-preview img, .download-links a, .video-links a');

    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Add focus indicators for keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
let ticking = false;

function updateOnScroll() {
    // Add scroll-based animations or effects here
    ticking = false;
}

window.addEventListener('scroll', function () {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Form validation (for future forms)
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        const errorMessage = field.nextElementSibling;

        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');

            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.textContent = 'This field is required';
            }
        } else {
            field.classList.remove('error');

            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.textContent = '';
            }
        }
    });

    return isValid;
}

// Export functions for use in other scripts
window.KDGB = {
    validateForm,
    debounce
};
