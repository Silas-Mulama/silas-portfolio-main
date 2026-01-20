document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        
        // Hamburger Animation (Optional visual feedback)
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if(navLinks.classList.contains('nav-active')){
                navLinks.classList.remove('nav-active');
            }
        });
    });

    // --- Form Validation ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission for demo
        
        let isValid = true;
        
        // Get inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Reset errors
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('error'));

        // Validate Name
        if(name.value.trim() === '') {
            showError(name);
            isValid = false;
        }

        // Validate Email
        if(email.value.trim() === '' || !isValidEmail(email.value)) {
            showError(email);
            isValid = false;
        }

        // Validate Message
        if(message.value.trim() === '') {
            showError(message);
            isValid = false;
        }

        if(isValid) {
            // Here you would usually send the data to a backend
            alert(`Thank you, ${name.value}! Your message has been "sent" (Frontend Validation Success).`);
            contactForm.reset();
        }
    });

    // Helper: Show Error
    function showError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
    }

    // Helper: Validate Email Regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // --- Smooth Scroll Highlight ---
    // Highlights the navbar link based on current scroll position
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active'); // You can add .active style in CSS if desired
            }
        });
    });
});