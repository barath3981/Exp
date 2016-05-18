
var app = angular.module('promiseApp', []);
app.controller('promiseCtrl', function ($scope, $q) {
    console.log('This is controller');
});

app.directive('name', function () {
    return {
        restrict: 'E',
        link: function (scope, ele, attr) {
            scope.fullName = attr.first+' '+attr.last;
        },
        template: '<h2>{{fullName}}</h2>'
    }
});
