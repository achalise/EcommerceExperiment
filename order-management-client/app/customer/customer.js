'use strict';

angular.module('orderManagement.customer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/customer', {
            templateUrl: 'customer/customer.html',
            controller: 'CustomerDetailCtrl'
        });
    }])

    .controller('CustomerDetailCtrl', ['$scope', function($scope) {
        $scope.customer =
            {
                'name': 'Ram Sharan',
                'Id'  : 1,
                'address' :
                    {
                        'street' : '50 Day Road',
                        'suburb' : 'Cheltenham',
                        'postcode' : '2119',
                        'state'   : 'NSW'
                    }
            }
    }]);
