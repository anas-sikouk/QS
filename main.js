// --- GESTION DES ANIMATIONS AU SCROLL ---
const observeScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// --- GESTION DU MENU MOBILE ---
const initMobileMenu = () => {
    const btnOpen = document.getElementById('btn-open');
    const btnClose = document.getElementById('btn-close');
    const menu = document.getElementById('mobile-menu');

    if (btnOpen && btnClose && menu) {
        btnOpen.onclick = () => {
            menu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Empêche le scroll quand le menu est ouvert
        };
        btnClose.onclick = () => {
            menu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };
    }
};

// Lancement au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    observeScroll();
    initMobileMenu();
});
