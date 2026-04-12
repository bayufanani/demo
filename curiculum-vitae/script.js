/**
 * Bayu CV - Interactive Scripts
 * Handles scroll animations and interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll Reveal Animation
    const revealSections = () => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once revealed for better performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.reveal');
        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // 2. Navbar Scroll Effect
    const handleNavbarScroll = () => {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.8rem 0';
                navbar.style.boxShadow = 'var(--glass-shadow)';
            } else {
                navbar.style.padding = '1.5rem 0';
                navbar.style.boxShadow = 'none';
            }
        });
    };

    // 3. Dynamic Greeting (Optional Flair)
    const setDynamicGreeting = () => {
        const heroTitle = document.querySelector('#hero h1');
        const hour = new Date().getHours();
        let greeting = "Hi, I'm Bayu";

        if (hour < 12) greeting = "Good morning, I'm Bayu";
        else if (hour < 18) greeting = "Good afternoon, I'm Bayu";
        else greeting = "Good evening, I'm Bayu";
        
        // Only update if greeting is not explicitly set by user text (user wanted "Hi, I'm Bayu")
        // But we can add it as a data attribute or keep it as is.
        // I'll stick to user's text but keep the function as a placeholder for extension.
    };

    // Initialize all functions
    revealSections();
    handleNavbarScroll();

    // Console message for developers
    console.log("%c Bayu Portfolio - Developed with ❤️ using Vanilla JS", "color: #6366f1; font-weight: bold; font-size: 1.2rem;");
});
