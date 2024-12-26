// src/ts/navigation.ts

export function initializeNavigation(): void {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuButton || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!mobileMenuButton.contains(target) && !mobileMenu.contains(target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 640) { // sm breakpoint in Tailwind
            mobileMenu.classList.add('hidden');
        }
    });
}