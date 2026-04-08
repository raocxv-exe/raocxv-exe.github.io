export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  const toggleNav = () => {
    const isOpen = navMenu.classList.contains('is-open');

    if (!isOpen) {
      // Opening logic
      navMenu.classList.add('is-open');
      setTimeout(() => {
        navMenu.classList.add('is-visible');
      }, 10);
    } else {
      // Closing logic
      navMenu.classList.remove('is-visible');
      setTimeout(() => {
        navMenu.classList.remove('is-open');
      }, 300); // Wait for the transition defined in CSS
    }
  };

  navButton.addEventListener('click', toggleNav);
  return () => navButton.removeEventListener('click', toggleNav);
}
