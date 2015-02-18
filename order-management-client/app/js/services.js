/* Services */

var orderManagementServices = angular.module('orderManagement.orderManagementServices', ['ngResource']);

orderManagementServices.factory('ProductService', ['$resource',
    function($resource){
        return $resource('data/:productId.json', {}, {
            query: {method:'GET', params:{productId:'products'}, isArray:true}
        });
    }]);
