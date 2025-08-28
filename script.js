        // Tab functionality
        document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-button');
            const sections = document.querySelectorAll('.menu-section');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');
                    const section = document.getElementById(tabId);

                    if (!section) {
                        console.warn(`No element found with id "${tabId}"`);
                        return;
                    }

                    // Remove active class from all buttons and sections
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    sections.forEach(sec => sec.classList.remove('active'));

                    // Add active class to clicked button and corresponding section
                    button.classList.add('active');
                    section.classList.add('active');
                });
            });
        });

        // Scroll to top functionality
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        // Show button when user scrolls to the bottom of the page
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            
            // Show button when user is near the bottom (last 20% of page)
            if (scrollPosition > (documentHeight - windowHeight) * 0.3) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
