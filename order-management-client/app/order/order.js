'use strict';

angular.module('orderManagement.order', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/orders', {
                templateUrl: 'order/search.html',
                controller: 'OrderCtrl'
            });
    }])

    .controller('OrderCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/customers.json').success(function(data) {
            $scope.customers = data;
        });
    }]);


