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
          }).
          when('/customers/search', {
                templateUrl: 'customer/search.html',
                controller: 'CustomerCtrl'
            }
          );
    }])

    .controller('CustomerDetailCtrl', ['$scope', '$routeParams', '$http', '$log', function($scope, $routeParams, $http, $log) {
        $scope.$log = $log;
        $http.get('data/customers.json').success(function(data) {
            $scope.customer = data[$routeParams.customerId - 1];
            $log.info("Displaying customer" + $scope.customer.name);
        });
        $scope.customerId = $routeParams.customerId;
    }])
    .controller('CustomerCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/customers.json').success(function(data) {
            $scope.customers = data;
        });
        console.log("test");
        $scope.submitForm = function() {

            console.log("Calling submit form " + $scope.firstName);
        }
    }]);

