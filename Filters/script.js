
var app = angular.module('promiseApp', []);
app.controller('promiseCtrl', function ($scope, $rootScope, $timeout) {
    $scope.result = "Hi this is bharath kumar";
    
    $scope.childScope = 'Initial child scope';
    $rootScope.parentScope = 'Initial parent scope';

    setTimeout(function () {
        console.log('Time done');
        $rootScope.parentScope = 'New parent scope';
        $scope.childScope = 'New child scope';

        $scope.$digest();
    }, 1000);

});
app.filter('removeSpace', function () {
    return function (value) {
        return value.replace(/ /g,'');
    } 
});