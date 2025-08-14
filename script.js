// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search and Filter Functionality
const searchInput = document.getElementById('searchInput');
const filterTags = document.querySelectorAll('.filter-tag');
const articleCards = document.querySelectorAll('.article-card');

let currentFilter = 'all';
let searchTerm = '';

// Filter functionality
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Remove active class from all tags
        filterTags.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tag
        tag.classList.add('active');
        
        currentFilter = tag.getAttribute('data-filter');
        filterArticles();
    });
});

// Search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        filterArticles();
    });
}

function filterArticles() {
    if (!articleCards || articleCards.length === 0) return;
    
    articleCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        const matchesSearch = searchTerm === '' || 
                            title.includes(searchTerm) || 
                            content.includes(searchTerm);
        
        if (matchesFilter && matchesSearch) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.org-card, .article-card, .impact-card, .resource-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Search button functionality
const searchBtn = document.querySelector('.search-btn');
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const searchValue = searchInput.value.toLowerCase();
        searchTerm = searchValue;
        filterArticles();
    });
}

// Enter key functionality for search
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchValue = searchInput.value.toLowerCase();
            searchTerm = searchValue;
            filterArticles();
        }
    });
}

// Article card click functionality (for future article pages)
if (articleCards && articleCards.length > 0) {
    articleCards.forEach(card => {
        const readMoreBtn = card.querySelector('.read-more-btn');
        
        // Make entire card clickable
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on the read more button
            if (e.target.classList.contains('read-more-btn')) {
                return;
            }
        
        // Add click effect
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateY(-3px)';
        }, 150);
        
        // Here you could add navigation to individual article pages
        // const articleTitle = card.querySelector('h3').textContent;
        // window.location.href = `/article.html?title=${encodeURIComponent(articleTitle)}`;
    });
    
    // Read More button functionality
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event
            
            // Add button click effect
            readMoreBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                readMoreBtn.style.transform = 'scale(1)';
            }, 150);
            
            // Here you could add navigation to individual article pages
            const articleTitle = card.querySelector('h3').textContent;
            console.log('Read More clicked for:', articleTitle);
            // window.location.href = `/article.html?title=${encodeURIComponent(articleTitle)}`;
        });
    }
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 30);
    });
}

// Trigger stats animation when hero section is visible
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(heroSection);

// Resource link hover effects
const resourceLinks = document.querySelectorAll('.resource-link');
resourceLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
    });
});

// Contact info hover effects
const contactInfo = document.querySelectorAll('.contact-info p');
contactInfo.forEach(info => {
    info.addEventListener('mouseenter', () => {
        info.style.transform = 'translateX(5px)';
        info.style.color = '#3498db';
    });
    
    info.addEventListener('mouseleave', () => {
        info.style.transform = 'translateX(0)';
        info.style.color = '';
    });
});

// Social media links
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your social media URLs here
        const platform = link.querySelector('i').className;
        let url = '#';
        
        if (platform.includes('twitter')) {
            url = 'https://twitter.com/peteschurmann';
        } else if (platform.includes('linkedin')) {
            url = 'https://linkedin.com/in/peteschurmann';
        } else if (platform.includes('facebook')) {
            url = 'https://facebook.com/peteschurmann';
        } else if (platform.includes('envelope')) {
            url = 'mailto:pete@ethnicmedialegacy.org';
        }
        
        window.open(url, '_blank');
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Error handling for missing elements
document.addEventListener('DOMContentLoaded', () => {
    // Check if required elements exist
    const requiredElements = [
        'searchInput',
        'hamburger',
        'navMenu'
    ];
    
    requiredElements.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with id '${id}' not found`);
        }
    });
});

// Performance optimization: Debounce search input
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

// Apply debouncing to search
const debouncedFilter = debounce(() => {
    // Only call filterArticles if it exists (on archive page)
    if (typeof filterArticles === 'function') {
        filterArticles();
    }
}, 300);

// Only add event listener if searchInput exists (on archive page)
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', debouncedFilter);
}
