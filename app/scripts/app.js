'use strict';

var myApp = angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */

  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title :"Home"
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        title :"About"
      })
      .when('/nicolas', {
        templateUrl: 'views/nicolas.html',
        controller : 'NicoCtrl',
        title :"Contact"
      })
      .when('/realizations', {
        templateUrl: 'views/realizations.html',
        controller : 'RelCtrl',
        title :"Realizations"
      })
      .when('/knowledges', {
        templateUrl: 'views/knowledges.html',
        controller : 'KnowledgesCtrl',
        title :"Knowledges"
      })
      .otherwise({
        redirectTo: '/'
      });
  });

myApp.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);


function HeaderController($scope, $location)
{
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}
