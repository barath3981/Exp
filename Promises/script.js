
var app = angular.module('promiseApp', []);
app.controller('promiseCtrl', function ($scope, $q) {
    var q = $q.defer();
     function add(x, y) {
         if(angular.isNumber(x+y)) {
             q.resolve(x+y);
         } else {
             q.reject('Invalid number');
         }
         return q.promise;
     }
    var promise = add(2, '5');
    promise.then(function(result) {
        $scope.result = result;
    }).
    catch(function (error) {
        $scope.result = error;
    })

});