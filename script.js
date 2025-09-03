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


// Add filtering options for categories
function addFilterOptions() {
    // This would be especially useful for the drinks page
    const drinksSection = document.getElementById('drinks');
    if (!drinksSection) return;
    
    const filterHTML = `
        <div class="filter-container" style="margin: 15px 0; display: flex; flex-wrap: wrap; gap: 10px;">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="vodka">Vodka</button>
            <button class="filter-btn" data-filter="gin">Gin</button>
            <button class="filter-btn" data-filter="whiskey">Whiskey</button>
            <button class="filter-btn" data-filter="tequila">Tequila</button>
            <button class="filter-btn" data-filter="rum">Rum</button>
            <button class="filter-btn" data-filter="wine">Wine</button>
            <button class="filter-btn" data-filter="prosecco">Prosecco</button>
            <button class="filter-btn" data-filter="beer">Beer</button>
            <button class="filter-btn" data-filter="cold beverages">Cold Beverages</button>
        </div>
    `;
    
    drinksSection.insertAdjacentHTML('afterbegin', filterHTML);
    
    const filterButtons = drinksSection.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const categories = drinksSection.querySelectorAll('.category');
            
            categories.forEach(category => {
                const categoryTitle = category.querySelector('.gold-text').textContent.toLowerCase();
                
                if (filter === 'all' || categoryTitle.includes(filter)) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    addFilterOptions();
});