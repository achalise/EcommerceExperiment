'use strict';

angular.module('orderManagement.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.customers = [
        {
            'name': 'Ram Sharan',
            'Id'  : 1
        },
        {
            'name': 'Krishna Ram',
            'Id'  : 2
        }
    ]
}]);
