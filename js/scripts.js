$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  $(".nav-list a").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").removeClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1000
  });
});

// $(function () {
//   $('.hamburger-menu').on('click', function () {
//     $('.nav-list').toggleClass('open');
//   });
// })
