var app = angular.module('promiseApp', ['myDirectives']);
app.controller('promiseCtrl', function ($scope) {
    console.log('Main controller: ');
    $scope.name = "yes";
    $scope.age = 60;
    $scope.alertName = function () {
        alert('Yeah its working');
    };
    $scope.addToCart = function (t, p) {
        var mainScope = angular.element("#main").scope();
        mainScope.buyItem(t, p);
        return false;
    };


    $scope.title = 'Planet Shop';

    $scope.items = [{
        title: 'Moon',
        price: '9.99€',
        src: 'http://brunoscopelliti.com/demo-resources/moon.png'
    }, {
        title: 'Sun',
        price: '29.99€',
        src: 'http://brunoscopelliti.com/demo-resources/sun.png'
    }, {
        title: 'Earth',
        price: '19.99€',
        src: 'http://brunoscopelliti.com/demo-resources/earth.png'
    }, {
        title: 'Pluton',
        price: '5.50€',
        src: 'http://brunoscopelliti.com/demo-resources/pluton.png'
    }, {
        title: 'Mars',
        price: '24.00€',
        src: 'http://brunoscopelliti.com/demo-resources/mars.png'
    }];

    $scope.cartItems = [];

    $scope.names = ['one', 'two', 'three', 'four', 'five', 'six'];

    $scope.buyItem = function (title, price) {
        var objAdded = {
            title: title,
            price: price
        };
        $scope.cartItems.push(objAdded);
    };

    $scope.focusText = false;
    $scope.focusMe1 = function () {
        $scope.focusText = true;
    };
});

angular.module('myDirectives', []).

directive('myDir', function () {
    return {
        restrict: 'E',
        controller: function ($scope, $element) {
            console.log(': controller');
            console.log($element.html());
        },
        /*compile: function (tElem, tAttrs) {
            console.log(': compile');
            console.log(tElem.html());
            return {
                pre: function (scope, iElem, iAttrs) {
                    console.log(': pre link');
                    console.log(iElem.html());
                },
                post: function (scope, iElem, iAttrs) {
                    console.log(': post link');
                    console.log(iElem.html());
                }
            }
        },*/
        link: function (scope, tElem, tAttrs) {
            console.log('This is link   ');
            console.log(tElem.html());
            return {
                pre: function (scope, iElem, iAttrs) {
                    console.log(': pre link');
                    console.log(iElem.html());
                },
                post: function (scope, iElem, iAttrs) {
                    console.log(': post link');
                    console.log(iElem.html());
                }
            }
        }
    }
}).

directive('myDad', function () {
    return {
        restrict: 'E',
        compile: function (tscope,tElem, tAttrs) {
            console.log('Elem1: ',tElem);
            return {
                pre: function (scope, elem, attr) {
                    console.log('Elem2: ',angular.equals(tscope, scope));
                    console.log('My dad link',tscope, scope);
                    scope.name1 = 'XXX';
                    scope.greeting = 'Hello!';
                }
            }
        }
    };
}).

directive('mySon', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attr) {
            console.log('My son link');
            scope.sonSays = 'Hey, I am son, and my dad is ' + scope.name1;
        }
    };
}).

directive('selectAllOnFocus', function () {
   return {
       restrict: 'A',

       link: function (scope, element) {
           element.bind('mouseover', function () {
               element.focus();
           });
       }
   } 
}).

directive('lkRepeat', function(){
    return {
        transclude : 'element',
        compile : function(element, attr, linker){
            return function($scope, $element, $attr){
                var myLoop = $attr.lkRepeat,
                    match = myLoop.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
                    indexString = match[1],
                    collectionString = match[2],
                    parent = $element.parent(),
                    elements = [];

                // $watchCollection is called everytime the collection is modified
                $scope.$watchCollection(collectionString, function(collection){
                    var i, block, childScope;

                    // check if elements have already been rendered
                    if(elements.length > 0){
                        // if so remove them from DOM, and destroy their scope
                        for (i = 0; i < elements.length; i++) {
                            elements[i].el.remove();
                            elements[i].scope.$destroy();
                        }
                        elements = [];
                    }

                    for (i = 0; i < collection.length; i++) {
                        // create a new scope for every element in the collection.
                        childScope = $scope.$new();
                        // pass the current element of the collection into that scope
                        childScope[indexString] = collection[i];

                        linker(childScope, function(clone){
                            // clone the transcluded element, passing in the new scope.
                            parent.append(clone); // add to DOM
                            block = {};
                            block.el = clone;
                            block.scope = childScope;
                            elements.push(block);
                        });
                    }
                });
            }
        }
    }
}).

directive('focusMe', function () {
    return {
        restrict: 'A',
        scope: { focus: '=focusMe' },
        link: function(scope, element) {
            scope.$watch('focus', function(value) {
                if(value === true) {
                    element[0].focus();
                    scope.focus = false;
                }
            });
        }
    }
}).

directive('itemCard', function () {
    // return the directive definition object
    return {
        scope: {
            title: '@itemTitle',
            price: '@itemPrice',
            src: '@itemSrc',
            method: '&itemClick'
        },
        controller: function ($scope, $element, $attrs, $location) {
            /*$scope.addToCart = function (t, p) {
                var mainScope = angular.element("#main").scope();
                mainScope.buyItem(t, p);
                return false;
            };
            $scope.addToCart1 = function () {
                alert('coll');
            };*/
        },
        replace: true,
        template: "<a ng-click='method()'>{{'itemClick'}} to cart</a>"
    };
}).

directive('shoppingCart', function () {
    return {
        replace: true,
        restrict: 'EACM',
        template: '<div class="sCart"><img src="http://brunoscopelliti.com/demo-resources/cart.png" alt="Items: "/> <span class="quantity">{{cartItems.length}}</span></div>'
    };
}).

directive("myFirstDirective", function () {
    return {
        restrict: 'EA',
        scope: {
            name: '@',
            age: '=',
            func: '&'
        },
        template: ['<p>Value of name in directive: {{name}}</p>',
            '<p>Enter new name: <input type="text" ng-model="name" ></p>',
            '<p>Value of the age in directive: {{age}}</p>',
            '<p>Enter a new age: <input type="text" ng-model="age"></p> ',
            '<p><input type="button" value="From Directive" ng-click="func()" > </p>'].join('')
    };
});