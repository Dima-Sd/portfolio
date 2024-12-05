$(function () {
  $('.menu__burger-button').click(function () {
    $(this).toggleClass('active')
    $('.menu__list').toggleClass('active')
  })
  $(function () {
    $('.menu__link').click(function () {
      $('.menu__list').toggleClass('active')
      $('.menu__burger-button').removeClass('active')
    })
  })

  var mixer = mixitup('.works__images');

  $(document).ready(function () {
    $(".menu a, .header__link, .logo").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1300);
    });
  });
})

const content = document.querySelector('.menu')
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition >= 300) {
    content.classList.add('active')
  } 
  else {
    content.classList.remove('active')
  }
})