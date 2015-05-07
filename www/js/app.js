// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  .state('app.person', {
    url: "/person",
    views: {
      'menuContent': {
        templateUrl: "templates/person_form.html",
        controller: 'PersonCtrl'
      }
    }
  })

  .state('app.people', {
    url: "/people",
    views: {
      'menuContent': {
        templateUrl: "templates/people.html",
        controller: 'PeopleCtrl'
      }
    }
  })

  .state('app.editPerson', {
    url: "/person/:personId",
    views: {
      'menuContent': {
        templateUrl: "templates/person_form.html",
        controller: 'PersonCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/people');
});
