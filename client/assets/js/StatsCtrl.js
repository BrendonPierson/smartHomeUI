(function() {
  'use strict'
  angular.module('application')
    .controller('StatsCtrl', StatsCtrl)

  StatsCtrl.$inject = ['FBURL', 'currentAuth', '$firebaseArray']

  function StatsCtrl(FBURL, currentAuth, $firebaseArray) {
    const vm = this

    const ref = new Firebase(FBURL)

    vm.indoorTemps = $firebaseArray(ref.child('sensors').child('indoorTemp'))
    vm.indoorTemps.$loaded().then(() => {
      console.log("vm.indoorTemps", vm.indoorTemps)
      vm.data = {
        dataset: vm.indoorTemps,
      };
    })



    vm.options = {
      margin: {
        top: 5
      },
      series: [{
        axis: "y",
        dataset: "dataset",
        key: "F",
        label: "Indoor Temperature",
        color: "hsla(88, 48%, 48%, 1)",
        type: ["line"],
        id: "my-chart",
        tickFormat: function(value, index) {
          return `${parseInt(value)} at ${new Date(index).toLocaleDateString()}`;
        }
      }],
      axes: {
        x: {
          key: "realTimestamp"
        }
      }
    };


  }
})()
