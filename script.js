document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // THEME TOGGLE (DARK / LIGHT MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    
    // Check local storage for preference, default to dark-theme
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    bodyElement.className = savedTheme;
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
            updateThemeIcon('light-theme');
        } else {
            bodyElement.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateThemeIcon('dark-theme');
        }
    });

    function updateThemeIcon(theme) {
        const icon = themeToggleBtn.querySelector('i');
        if (theme === 'dark-theme') {
            icon.className = 'fas fa-sun'; // Sun icon means click to switch to light mode
        } else {
            icon.className = 'fas fa-moon'; // Moon icon means click to switch to dark mode
        }
    }

    // ==========================================================================
    // MOBILE NAV DRAWER MENU
    // ==========================================================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = navLinksContainer.querySelectorAll('a');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });

    // ==========================================================================
    // SCROLL EFFECTS & NAVBAR SCROLLED STATE
    // ==========================================================================
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // 1. Scroll Progress Bar
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';

        // 2. Navbar Scrolled Class (change opacity/shadow)
        if (scrollTop > 20) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.padding = '5px 0'; // slightly collapse padding
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }

        // 3. Back to Top Button Visibility
        if (scrollTop > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        // 4. Highlight Nav Link on Scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // adjust offset for navbar height
            const sectionHeight = section.clientHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Smooth Scroll to Top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================================================
    // CURRENT YEAR IN FOOTER
    // ==========================================================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
