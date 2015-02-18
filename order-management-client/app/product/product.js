'use strict';

angular.module('orderManagement.product', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/products', {
                templateUrl: 'product/search.html',
                controller: 'ProductCtrl'
            });
    }])

    .controller('ProductCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;
        });
    }]);


