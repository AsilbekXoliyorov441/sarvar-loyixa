$(function () {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });

  $(".service-carousel").owlCarousel({
    loop: true,
    margin: 18,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 700,
    responsive: {
      0: { items: 1, stagePadding: 30 },
      520: { items: 2 },
      900: { items: 3 },
    },
  });

  $(".story-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      700: { items: 2 },
    },
  });

  // Sarlavhadagi tugmalar orqali slayderni boshqarish
  $(".nav-btn").on("click", function () {
    const $carousel = $($(this).data("target"));
    $carousel.trigger($(this).data("dir") === "next" ? "next.owl.carousel" : "prev.owl.carousel");
  });

  // Scroll bo'lganda navbar va "yuqoriga" tugmasi
  const $navbar = $("#navbar");
  const $toTop = $("#to-top");

  $(window).on("scroll", function () {
    const scrolled = $(this).scrollTop() > 60;
    $navbar.toggleClass("scrolled", scrolled);
    $toTop.toggleClass("show", $(this).scrollTop() > 500);
  });

  // Mobil menyuda link bosilganda menyuni yopish
  $(".nav-links a").on("click", function () {
    $("#menu-toggle").prop("checked", false);
  });
});
