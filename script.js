// ==============================
// Luckyfx Portfolio Website
// Software & Web Developer
// ==============================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
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

// Fade-in animation on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';

    observer.observe(section);
});

// Dynamic footer year
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Welcome message
console.log(
    '%cWelcome to Luckyfx Portfolio',
    'color:#38bdf8; font-size:16px; font-weight:bold;'
);

console.log(
    'Software Developer | Web Developer'
);