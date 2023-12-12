// script.js
$(document).ready(function () {
  $(window).scroll(function () {
      $('.parallax').css('background-position-y', -(scrollTop * 0.3) + 'px');
  });
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

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = window.scrollY;
    $('.parallax').css('background-position-y', -(scrollTop * 0.3) + 'px');
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

// Fonction pour valider la connexion
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



