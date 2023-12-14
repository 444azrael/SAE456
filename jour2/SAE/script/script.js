// script.js
$(document).ready(function () {
  var scrollTop = window.scrollY;
  $(window).scroll(function () {
    $('.parallax').css('background-position-y', -(scrollTop * 0.3) + 'px');
  });

  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');

    if (scrollTop === 0) {
      navbar.classList.add('fixed-top', 'transparent-bg');
    } else {
      navbar.classList.remove('fixed-top', 'transparent-bg');
    }
  });

  // Vérification des permissions lors du chargement de la page
  var userType = getQueryParam('type');

  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    // Si c'est la page de connexion, ajoutez le gestionnaire d'événements pour la validation
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validateLogin();
    });
  }
});

// Fonction pour obtenir la valeur d'un paramètre d'URL
function getQueryParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fonction pour vérifier les permissions en fonction du type d'utilisateur
function checkPermissions(userType) {
  switch (userType) {
    case 'entreprise':
      // Autorisation pour l'utilisateur de type entreprise
      return true;
    case 'association':
      // Autorisation pour l'utilisateur de type association
      return true;
    case 'mairie':
      // Autorisation pour l'utilisateur de type mairie
      return true;
    case 'habitant':
      // Autorisation pour l'utilisateur de type habitant
      return true;
    default:
      return false;
  }
}


// Fonction pour valider la connexion
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
    // Afficher une pop-up d'erreur en utilisant Bootstrap
    alert('Identifiant ou mot de passe incorrect');
    return; // Arrêter l'exécution si l'authentification échoue
  }

  // Vérifier les permissions avant de rediriger vers la page de questionnaire
  if (checkPermissions(userType)) {
    var questionnairePage = 'questionnaire_' + userType + '.html?type=' + userType;
    window.location.href = questionnairePage;
  } else {
    alert('Vous n\'avez pas les permissions nécessaires pour accéder à cette page');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Date des Jeux Olympiques 2024 à Paris
  const olympicsDate = new Date('July 26, 2024 00:00:00 GMT+0000');

  function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = olympicsDate - currentDate;

      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 365;

      // Calculer les mois et les jours restants dans le mois
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

  // Mettez à jour le compte à rebours toutes les secondes
  setInterval(updateCountdown, 1000);

  // Mettez à jour le compte à rebours lors du chargement initial de la page
  updateCountdown();
});

document.addEventListener("DOMContentLoaded", function () {
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
