import "./scss/index.scss";
import "bootstrap";
import "popper.js";
import * as $ from "jquery";

$(function () {
  getCookie();

  // Close top banner
  $('.js-banner-close').click(() => {
    $('.feat-banner').addClass('feat-banner--close');
  })

  // Close cookie banner
  $('.js-close').click(() => {
    $('.feat-cookie').addClass('feat-cookie--closed')
  });

  // Accept all cookies from the banner at the bottom of the page
  $('.js-accept-cookie').click(() => {
    const date = new Date();
    document.cookie = `cookies=All; expires=${new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}; path=/`;
    $('.feat-cookie').addClass('feat-cookie--closed')
  });

  // Toggle users choice of the cookies
  $('.js-toggle').click((event) => {
    const parent = event.currentTarget.closest('.a-toggle');
    console.log(event.currentTarget.closest('.a-toggle').classList)
    if (!parent.classList.contains('a-toggle--checked')) {
      $(parent).addClass('a-toggle--checked')
    } else {
      $(parent).removeClass('a-toggle--checked')
    }
  })

  // Add cookies based on users choice in the modal
  $('.js-accept-cookie-modal').click(() => {
    const toggles = $('.js-toggle');
    const values = [];

    toggles.map((id) => {
      if (toggles[id].checked) { values.push(toggles[id].id) }
    });
    console.log(values, values.length)
    const date = new Date();

    $('.feat-cookie').addClass('feat-cookie--closed')
    switch (values.length) {
      case 0: return document.cookie = `cookies=Mandatory; expires=${new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}; path=/`;
      case 1: return document.cookie = `cookies=${values[0]}; expires=${new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}; path=/`;
      case toggles.length: return document.cookie = `cookies=All; expires=${new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}; path=/`;
      default:
        return document.cookie = `cookies=All; expires=${new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}; path=/`;
    }

  })

  // Define observer for triggering display of the sticky navigation
  const intersectionObserver = new IntersectionObserver(function (entries) {
    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    if (entries[0].intersectionRatio <= 0) {
      $('.js-sticky').addClass('header-sticky--visible')
    } else {
      $('.js-sticky').removeClass('header-sticky--visible')

    }
  });
  // start observing
  intersectionObserver.observe(document.querySelector('.js-header'));

  // Handle opening/closing of the mobile side header
  $('.js-burger').click((event) => {
    $('.js-burger').toggleClass('header__burger-menu--active');
    $('.js-mobile').toggleClass("feat-header--mobile-visible");
    $('body').toggleClass('h-no-scroll');
  });

  // Function to trigger srcoll to top
  const btn = $('#srolltotop');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

});

// Retrieve cookies that are saved
function getCookie() {
  const cookies = document.cookie.split(';');
  const filteredCookie = cookies.filter((cookie) => cookie.indexOf('cookies') > -1);
  if (filteredCookie.length > 0) {
    $('.feat-cookie').addClass('feat-cookie--closed')
  } else {
    $('.feat-cookie').removeClass('feat-cookie--closed')
  }
}
