
var app = angular.module('promiseApp', []);
app.controller('promiseCtrl', function ($scope, $q) {
    $scope.tabNames = ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5', 'Tab5', 'Tab6', 'Tab7'];
});

app.directive('customPopover', function () {
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            angular.element(el).popover({
                trigger: 'hover',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});

app.directive('customTabs', function () {
    return {
        restrict: 'A',
        scope: {
            tabs: '=tabs'
        },
        templateUrl: 'views/tabsView.html',
        link: function(scope, el, attrs){
            scope.contentBaseId = attrs.tabsBaseId;
        }
    };
});

app.directive('customModal', function () {
    return {
        restrict: 'E',
        scope: {
            modalMain: '@modalMain',
            modalContent: '@modalContent',
            modalId: '@modalId '
        },
        link: function (scope, ele, attr) {
            scope.getView = function () {
                return 'views/'+scope.modalMain;
            };
            console.log(scope.modalMain);
        },
        template: '<div ng-include="getView()"></div>'
    } 
});

app.directive('modalContent', function () {
    return {
        restrict: 'E',
        scope: true,
        link: function (scope, ele, attr) {
            scope.getView = function () {
                return 'views/'+scope.modalContent;
            };
            console.log(scope.modalContent);
        },
        template: '<div ng-include="getView()"></div>'
    }
});