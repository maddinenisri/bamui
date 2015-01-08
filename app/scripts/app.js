(function() {
'use strict';

/**
 * @ngdoc overview
 * @name bamuiApp
 * @description
 * # bamuiApp
 *
 * Main module of the application.
 */
angular
  .module('bamuiApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'bamuiApp.dashboard'
  ]);

function mainStateProvider($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'views/about.html'	
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/main.html'	
  });

  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html'	
  });

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardController as dashboardCtl'	
  });
}

function runDefaultState($state) {
	$state.go('home');
}

angular.module('bamuiApp').config(mainStateProvider).run(runDefaultState);

mainStateProvider.$inject = ['$stateProvider'];
runDefaultState.$inject = ['$state'];

})();

