/**
 * Created by bhanu on 18/5/16.
 */


taskApp.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/firstview");

    // Now set up the states
    $stateProvider

        .state('firstView', {

            url: "/firstview",

            templateUrl: "views/firstView.html"

        })


        .state('secondView', {

            url: "/secondview",

            templateUrl: "views/secondView.html"

        })


        .state('thirdView', {

            url: "/thirdview",

            templateUrl: "views/thirdView.html"
        });

});