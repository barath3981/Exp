
var app = angular.module('promiseApp', ['pascalprecht.translate']);
app.controller('promiseCtrl', function ($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});
app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        TITLE: 'Hello',
        PARA: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    })
    .translations('de', {
        TITLE: 'Hallo',
        PARA: 'Dies ist ein Paragraph.',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch'
    });
//setting default language
    $translateProvider.preferredLanguage('en');
});