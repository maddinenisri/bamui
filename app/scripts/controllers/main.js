'use strict';

/**
 * @ngdoc function
 * @name bamuiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bamuiApp
 */
angular.module('bamuiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
