// ===== MODAL FORM =====
const openModalBtn = document.querySelector('.hero-button');
const modalBackdrop = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close');

if (openModalBtn && modalBackdrop) {
  openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('is-open');
  });
}

if (modalCloseBtn && modalBackdrop) {
  modalCloseBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('is-open');
  });
}


// ===== BURGER MENU =====
const burgerBtn = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const burgerCloseBtn = document.querySelector('.mobile-menu .modal-close');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });
}

if (burgerCloseBtn && mobileMenu) {
  burgerCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
}