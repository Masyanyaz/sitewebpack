window.onload = () => {
  document.querySelector('.go-to-top').addEventListener('click', e => {
    e.preventDefault();

  })
}
$(document).ready(function () {
  $('.header__burger').on('click', function () {
    const headerMobile = document.querySelector('.header__mobile-menu');
    if (headerMobile.classList.contains('mb-active')) {
      headerMobile.classList.remove('mb-active');
    } else {
      headerMobile.classList.add('mb-active');
    }
  });
});