$(document).ready(function () {
  // Effet Parallaxe
  var scrollTop = window.scrollY;
  $(window).scroll(function () {
    $('.parallax').css('background-position-y', -(scrollTop * 0.3) + 'px');
  });

  // Style de la barre de navigation lors du défilement
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.scrollY;
    if (scrollTop === 0) {
      navbar.classList.add('fixed-top', 'transparent-bg');
    } else {
      navbar.classList.remove('fixed-top', 'transparent-bg');
    }
  });

  // Validation du formulaire de connexion
  var userType = getQueryParam('type');
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validateLogin();
    });
  }
});

// Fonctions utilitaires
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
      return true;
    default:
      return false;
  }
}

// Validation de la connexion
function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var userType;

  if (username === 'entreprise2024' && password === 'JO2024') {
    userType = 'entreprise';
  } else if (username == 'association2024' && password == 'JO2024') {
    userType = 'association';
  } else if (username == 'mairie2024' && password == 'JO2024') {
    userType = 'mairie';
  } else if (username == 'habitant2024' && password == 'JO2024') {
    userType = 'habitant';
  } else {
    alert('Identifiant ou mot de passe incorrect');
    return;
  }

  if (checkPermissions(userType)) {
    var questionnairePage = 'questionnaire_' + userType + '.html?type=' + userType;
    window.location.href = questionnairePage;
  } else {
    alert('Vous n\'avez pas les permissions nécessaires pour accéder à cette page');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Compte à rebours pour les Jeux Olympiques 2024
  const olympicsDate = new Date('26 juillet 2024 00:00:00 GMT+0000');

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
  // Anneaux de navigation
  var ringBlue = document.querySelector(".ring-blue.ring-clickable");
  var ringRed = document.querySelector(".ring-red.ring-clickable");
  var ringGreen = document.querySelector(".ring-green.ring-clickable");
  var ringYellow = document.querySelector(".ring-yellow.ring-clickable");

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
