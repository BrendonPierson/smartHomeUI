(function() {
  'use strict'
  angular.module('application')
    .factory("Auth", Auth)

    Auth.$inject = ['FBURL', '$firebaseAuth']

    function Auth(FBURL, $firebaseAuth) {
      const ref = new Firebase(FBURL);
      return $firebaseAuth(ref)
    }
})()
