angular
    .module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/products', {
                  templateUrl: 'scripts/products/products.html'
            });
    }]);