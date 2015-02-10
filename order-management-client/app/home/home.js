'use strict';

angular.module('orderManagement.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
   $http.get('data/customers.json').success(function(data) {
     $scope.customers = data;
   });
}]);

