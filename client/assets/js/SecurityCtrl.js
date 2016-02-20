(function() {
  'use strict'
  angular.module('application')
    .controller('SecurityCtrl', SecurityCtrl)

  SecurityCtrl.$inject = ['$scope', 'FBURL', 'currentAuth', '$firebaseObject']

  function SecurityCtrl($scope, FBURL, currentAuth, $firebaseObject) {
    const ref = new Firebase(FBURL)
    $firebaseObject(ref.child('security')).$bindTo($scope, 'security')
    
    $scope.disarm = () => {
      $scope.security.siren = 0
      $scope.security.armed = 0
    }

  }
})()
