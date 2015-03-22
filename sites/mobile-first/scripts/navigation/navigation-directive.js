angular.module('app')
    .directive('navigation', function () {
       return {
           restrict: 'E',
           replace: false,
           templateUrl: 'scripts/navigation/navigation-directive.html',
           controller: function () {

           }
       }
    });