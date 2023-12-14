// script.js
$(document).ready(function () {
  // Récupérer le userType du stockage local
  var storedUserType = localStorage.getItem('userType');

  // Vérifier si le userType est déjà stocké
  if (storedUserType) {
    // Si oui, rediriger vers la page spécifique avec le userType
    redirectToPage(storedUserType);
  }

  $(window).scroll(function () {
    // Correction pour le parallax
    $('.parallax').css('background-position-y', -(window.scrollY * 0.3) + 'px');
  });

  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validateLogin();
    });
  }
});

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  var navbar = document.querySelector('.navbar');

  if (scrollTop === 0) {
    navbar.classList.add('fixed-top', 'transparent-bg');
  } else {
    navbar.classList.remove('fixed-top', 'transparent-bg');
  }
});

function getQueryParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function checkPermissions(userType) {
  switch (userType) {
    case 'entreprise':
    case 'association':
    case 'mairie':
    case 'habitant':
    case 'admin':
      return true; // Autoriser ces types d'utilisateurs
    default:
      return false;
  }
}

function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var userType;

  if (username === 'entreprise2024' && password === 'JO2024') {
    userType = 'entreprise';
  } else if (username === 'association2024' && password === 'JO2024') {
    userType = 'association';
  } else if (username === 'mairie2024' && password === 'JO2024') {
    userType = 'mairie';
  } else if (username === 'habitant2024' && password === 'JO2024') {
    userType = 'habitant';
  } else if (username === 'Administrateur24' && password === 'JO2024') {
    userType = 'admin';
  } else {
    alert('Identifiant ou mot de passe incorrect');
    return;
  }

  // Stocker le userType dans le localStorage
  localStorage.setItem('userType', userType);

  // Rediriger vers la page spécifique avec le userType
  redirectToPage(userType);
}

function redirectToPage(userType) {
  if (checkPermissions(userType)) {
    var destinationPage;
    switch (userType) {
      case 'admin':
        destinationPage = 'Statistique.html'
        window.location.href = destinationPage;
        break;
      case 'entreprise':
        destinationPage = 'questionnaire_entreprise.html?type=' + userType;
        window.location.href = destinationPage;
        break;
      case 'association':
        destinationPage = 'questionnaire_association.html?type=' + userType;
        window.location.href = destinationPage;
        break;
      case 'mairie':
        destinationPage = 'questionnaire_mairie.html?type=' + userType;
        window.location.href = destinationPage;
        break;
      case 'habitant':
        destinationPage = 'questionnaire_habitant.html?type=' + userType;
        window.location.href = destinationPage;
        break;
      default:
        destinationPage = 'index.html';
    }
  } else {
    alert('Vous n\'avez pas les permissions nécessaires pour accéder à cette page');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const olympicsDate = new Date('July 26, 2024 00:00:00 GMT+0000');
  function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = olympicsDate - currentDate;
      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 365;
      const months = Math.floor(days / 30);
      const remainingDaysInMonth = days % 30;

      const years = Math.floor(days / 365);

      document.getElementById('years').textContent = years;
      document.getElementById('months').textContent = months;
      document.getElementById('days').textContent = remainingDaysInMonth;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
});

document.addEventListener("DOMContentLoaded", function () {
  var ringBlue = document.querySelector(".ring-blue.ring-clickable");
  var ringRed = document.querySelector(".ring-red.ring-clickable");
  var ringGreen = document.querySelector(".ring-green.ring-clickable");
  var ringYellow = document.querySelector(".ring-yellow.ring-clickable");
  var ringBlack = document.querySelector(".ring-black.ring-clickable");

  ringBlue.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  ringRed.addEventListener("click", function () {
    window.location.href = "financement.html";
  });
  ringGreen.addEventListener("click", function () {
    window.location.href = "faq.html";
  });
  ringYellow.addEventListener("click", function () {
    window.location.href = "presentation.html";
  });
});
