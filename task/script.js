/**
 * Created by bhanu on 18/5/16.
 */

var taskApp = angular.module('taskApp', ['ui.router']);

taskApp.controller('taskCtrl', ['$scope', '$location', 'validationService', function ($scope, $location, validationService) {

    $location.path('#/firstview');

    $scope.taskObj = {

        'name': '',

        'phoneNO': '',

        'address': '',

        'emailID': '',

        'password': ''

    };
    
    /*
    * These are the validateion methods
    * */
    $scope.validateName = function (name) {
        
        if(validationService.validateText(name, 'NAME VALIDATION')) {

            return true;

        } else {

            alert('Name validation failed');

        }
        
    };

    $scope.validateNo = function (phoneNO) {

        if(validationService.phoneNumber(phoneNO, 'PHONE NO VALIDATION')){

            return true;

        } else {

            alert('Phone no validation failed');

        }

    };

    $scope.validateAddress = function (address) {

        if(validationService.validateText(address, 'ADDRESS VALIDATION')){

            return true;

        } else {

            alert('Address validation failed');

        }

    };

    $scope.validateEmailID = function (emailID) {

        if(validationService.validateEmail(emailID, 'EMAILID VALIDATION')){

            return true;

        } else {

            alert('Email validation failed');

        }
    };

    $scope.validatePassword = function (name) {

        if(validationService.validateText(name, 'PASSWORD VALIDATION')){

            return true;

        } else {

            alert('Password validation failed');

        }

    };
    /*
    * These are the validateion methods
    * */
    
    
    $scope.validateSignupForm = function (taskObj) {
        
        if($scope.validateName(taskObj.name) &&
            $scope.validateNo(taskObj.phoneNO) &&
            $scope.validateAddress(taskObj.address) &&
            $scope.validateEmailID(taskObj.emailID) &&
            $scope.validatePassword(taskObj.password)) {

            alert('validation success');
            
        }
        
    };



}]);

