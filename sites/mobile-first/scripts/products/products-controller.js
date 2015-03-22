angular
    .module('app')
    .controller('ProductsController', ['$scope', function ($scope) {
        $scope.products = [
            {
                name: 'Some product',
                description: 'Lorem ipsum lorem ipsum',
                price: 5.55
            },
            {
                name: 'Another product',
                description: 'Lorem ipsum lorem ipsum',
                price: 2.25
            },
            {
                name: 'Third product',
                description: 'Lorem ipsum lorem ipsum',
                price: 15.10
            }
        ];
    }]);