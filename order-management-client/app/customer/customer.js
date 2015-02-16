'use strict';

angular.module('orderManagement.customer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
          when('/customer/:customerId', {
            templateUrl: 'customer/customer.html',
            controller: 'CustomerDetailCtrl'
          }).
          when('/customers', {
            templateUrl: 'customer/search.html',
            controller: 'CustomerCtrl'
          });
    }])

    .controller('CustomerDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $http.get('data/customers.json').success(function(data) {
            $scope.customer = data[$routeParams.customerId - 1];
        });
        $scope.customerId = $routeParams.customerId;
    }])
    .controller('CustomerCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/customers.json').success(function(data) {
            $scope.customers = data;
        });
    }]);


