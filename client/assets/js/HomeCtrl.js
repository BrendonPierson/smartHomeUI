(function() {
  'use strict'
  angular.module('application')
    .controller('HomeCtrl', HomeCtrl)

  HomeCtrl.$inject = ['FBURL', 'currentAuth', '$state']

  function HomeCtrl(FBURL, currentAuth, $state) {
    const vm = this
    const ref = new Firebase(FBURL)

    vm.auth = currentAuth

    vm.login = () => {
      ref.authWithPassword({
          email: vm.user.username,
          password: vm.user.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $state.go('security')
          }
      })
    }

    vm.logout = () => {
      ref.unauth();
    }
  }
})()
