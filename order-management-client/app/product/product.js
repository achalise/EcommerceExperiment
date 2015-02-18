'use strict';

angular.module('orderManagement.product', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/products', {
                templateUrl: 'product/search.html',
                controller: 'ProductCtrl'
            }).
            when('/product/:productId', {
                templateUrl: 'product/product.html',
                controller: 'ProductDetail2Ctrl'
            });
    }])

    .controller('ProductCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('data/products.json').success(function(data) {
            $scope.products = data;
        });
    }])
    .controller('ProductDetailCtrl', ['$scope', '$routeParams', '$http', function($scope,  $routeParams, $http) {
            $http.get('data/'+$routeParams.productId+'.json').success(function(data) {
            $scope.product = data;
            $scope.param = $routeParams.productId;
        });
    }])
    .controller('ProductDetail2Ctrl', ['$scope', '$routeParams', 'ProductService',
    function($scope, $routeParams, ProductService) {
        $scope.product = ProductService.get({productId: $routeParams.productId});
    }]);



