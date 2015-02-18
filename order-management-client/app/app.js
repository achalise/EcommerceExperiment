'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        //'ui.bootstrap',
        'ngRoute',
  'myApp.version',
  'orderManagement.home',
  'orderManagement.customer',
  'orderManagement.order',
  'orderManagement.product',
  'orderManagement.orderManagementServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
