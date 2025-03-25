'use strict';

// Navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// Nav toggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// Theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

// Function to update text color based on theme
const updateSocialTextColor = function () {
  const isDarkMode = document.body.classList.contains('dark-theme');
  const socialTextElements = document.querySelectorAll('.social-profile a span');

  socialTextElements.forEach(span => {
    span.style.color = isDarkMode ? '#ffffff' : '#000000'; // White in dark mode, black in light mode
  });
};

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', function () {

    // Toggle `light-theme` & `dark-theme` class from `body`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let j = 0; j < themeBtn.length; j++) {
      themeBtn[j].classList.toggle('light');
      themeBtn[j].classList.toggle('dark');
    }

    // Update social media text color
    updateSocialTextColor();
  });
}

// Run the function once on page load in case dark mode is pre-set
updateSocialTextColor();
