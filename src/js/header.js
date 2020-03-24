document.querySelector('.header__burger').addEventListener('click', () => {
  const headerMobile = document.querySelector('.header__mobile-menu');
  headerMobile.classList.contains('mb-active') ?
    headerMobile.classList.remove('mb-active') :
    headerMobile.classList.add('mb-active');
})
