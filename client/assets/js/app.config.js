(function() {
  'use strict'
  angular.module('application')
    .config(config)

  config.$inject = [
    '$urlRouterProvider',
    '$locationProvider',
    '$stateProvider'
  ]

  function config($urlProvider, $locationProvider, $stateProvider) {
    $urlProvider.otherwise('/');

    // $locationProvider.html5Mode({
    //   enabled: false,
    //   requireBase: false
    // });
    // $locationProvider.hashPrefix('!');

    $stateProvider
      .state("home", {
        url: "/",
        controller: "HomeCtrl",
        controllerAs: "vm",
        templateUrl: "templates/home.html",
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth();
          }]
        }
      })
      .state("security", {
        url: "/security",
        controller: "SecurityCtrl",
        templateUrl: "templates/security.html",
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
      })
      .state("stats", {
        url: "/stats",
        controller: "StatsCtrl",
        controllerAs: "vm",
        templateUrl: "templates/stats.html",
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
      })
  }
})()
