import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
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

    // Handle course tab functionality
    const tabs = ['freshman', 'sophomore', 'junior', 'senior'];

    tabs.forEach(year => {
        const tab = document.getElementById(`${year}-tab`);
        const content = document.getElementById(`${year}-courses`);

        if (tab && content) {
            tab.addEventListener('click', () => {
                // Hide all course sections and deactivate all tabs
                tabs.forEach(y => {
                    const courseContent = document.getElementById(`${y}-courses`);
                    const courseTab = document.getElementById(`${y}-tab`);
                    if (courseContent) courseContent.classList.add('hidden');
                    if (courseTab) {
                        courseTab.classList.remove('active');
                        courseTab.classList.remove('text-gray-900', 'border-indigo-500');
                        courseTab.classList.add('text-gray-500');
                    }
                });

                // Show the selected course section and activate the corresponding tab
                content.classList.remove('hidden');
                tab.classList.add('active');
                tab.classList.remove('text-gray-500');
                tab.classList.add('text-gray-900', 'border-indigo-500');
            });
        }
    });

    // Set junior tab as default active tab on the about page
    const defaultTab = document.getElementById('junior-tab');
    if (defaultTab) {
        defaultTab.click();
    }

    // Initialize Feather icons if the script is loaded
    if (typeof window.feather !== 'undefined') {
        window.feather.replace();
    }
});