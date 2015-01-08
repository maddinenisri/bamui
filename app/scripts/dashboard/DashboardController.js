(function() {

  'use strict';

  function dashboardController($scope, $log) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'Dashboard';

    vm.items = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true	
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ];

    vm.handleOnClick = function(name) {
      $log.info('Selected Point: '+name);
      vm.drilldownItems = [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
      }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
      }];
    },

    $scope.$watch('vm.title', function(current, original) {
      $log.info('vm.title was %s', original);
      $log.info('vm.title is now %s', current);
    });
  }

  angular
    .module('bamuiApp.dashboard')
    .controller('DashboardController', dashboardController);

  dashboardController.$inject = ['$scope', '$log'];  
})();