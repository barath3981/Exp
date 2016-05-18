
var app = angular.module('promiseApp', []);
app.controller('promiseCtrl', function ($scope, $q) {
    console.log('This is controller');
});
app.config([function () {
    console.log('This is config');
}]);
app.run([function () {
    console.log('This is run');
}]);