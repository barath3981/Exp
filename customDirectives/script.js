
var app = angular.module('promiseApp', []);
app.controller('promiseCtrl', function ($scope, $q) {
    $scope.val1 = 1;
    $scope.val2 = 1;
    console.log('This is controller');
    
    $scope.eventDetails= {
        eventType: '0',
        RSVPType: '0',
        eventCategory: '',
        eventTitle: ''
    };
    $scope.updateCategory = function (eventType) { 
        if(eventType == '0') {
            $scope.categories = [{"id":"Customer\/ EmployeeBirthday","position":1,"name":"Customer\/ Employee Birthday","value":"Customer\/ Employee Birthday","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Customer\/EmployeeAnniversary","position":2,"name":"Customer\/Employee Anniversary","value":"Customer\/Employee Anniversary","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"AppointmentReminders","position":3,"name":"Appointment Reminders","value":"Appointment Reminders","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"ThankYou","position":4,"name":"Thank You","value":"Thank You","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"CompanyNewsletter","position":5,"name":"Company Newsletter","value":"Company Newsletter","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Announcement","position":6,"name":"Announcement","value":"Announcement","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"ProductLaunch","position":7,"name":"Product Launch","value":"Product Launch","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"CompanyAnniversary","position":8,"name":"Company Anniversary","value":"Company Anniversary","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"CompanyMilestone","position":9,"name":"Company Milestone","value":"Company Milestone","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"HolidayGreetings","position":10,"name":"Holiday Greetings","value":"Holiday Greetings","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"WelcomeMessage","position":11,"name":"Welcome Message","value":"Welcome Message","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"GreetingsFromCEO","position":12,"name":"Greetings From CEO","value":"Greetings From CEO","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"HowtoGuide","position":13,"name":"How to Guide","value":"How to Guide","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"NewBookE-book","position":14,"name":"New Book E-book","value":"New Book E-book","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"NewYear\u2019s","position":15,"name":"New Year\u2019s","value":"New Year\u2019s","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Other","position":16,"name":"Other","value":"Other","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"}];
        } else {
            $scope.categories = [{"id":"Wedding","position":1,"name":"Wedding","value":"Wedding","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BarMitzvah","position":2,"name":"Bar mitzvah","value":"Bar mitzvah","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BatMitzvah","position":3,"name":"Bat mitzvah","value":"Bat mitzvah","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BabyShower","position":4,"name":"Baby shower","value":"Baby shower","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Baptism","position":5,"name":"Baptism","value":"Baptism","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Graduation","position":6,"name":"Graduation","value":"Graduation","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"TeamBuildingEvent","position":7,"name":"Team Building Event","value":"Team Building Event","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Employee\/CustomerRecognition","position":8,"name":"Employee\/Customer Recognition","value":"Employee\/Customer Recognition","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"ProductLaunch","position":9,"name":"Product Launch","value":"Product Launch","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"CompanyAnniversary","position":10,"name":"Company Anniversary","value":"Company Anniversary","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":" HappyHour","position":11,"name":" Happy Hour","value":" Happy Hour","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BoardMeeting","position":12,"name":"Board Meeting","value":"Board Meeting","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Conference","position":13,"name":"Conference","value":"Conference","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Seminar\/Workshop","position":14,"name":"Seminar\/Workshop","value":"Seminar\/Workshop","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Tradeshow","position":15,"name":"Tradeshow","value":"Tradeshow","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Fundraiser\/CharityEvent","position":16,"name":"Fundraiser\/Charity Event","value":"Fundraiser\/Charity Event","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Potluck","position":17,"name":"Potluck","value":"Potluck","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Tailgating","position":18,"name":"Tailgating","value":"Tailgating","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"SuperBowl","position":19,"name":"Super Bowl","value":"Super Bowl","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"St.Patrick\u2019sDay","position":20,"name":"St. Patrick\u2019s Day","value":"St. Patrick\u2019s Day","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"MemorialDay","position":21,"name":"Memorial Day","value":"Memorial Day","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Halloween","position":22,"name":"Halloween","value":"Halloween","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Thanksgiving","position":23,"name":"Thanksgiving","value":"Thanksgiving","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Christmas","position":24,"name":"Christmas","value":"Christmas","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Other","position":25,"name":"Other","value":"Other","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"}];
        }
    };
    $scope.categories = [{"id":"Wedding","position":1,"name":"Wedding","value":"Wedding","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BarMitzvah","position":2,"name":"Bar mitzvah","value":"Bar mitzvah","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BatMitzvah","position":3,"name":"Bat mitzvah","value":"Bat mitzvah","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BabyShower","position":4,"name":"Baby shower","value":"Baby shower","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Baptism","position":5,"name":"Baptism","value":"Baptism","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Graduation","position":6,"name":"Graduation","value":"Graduation","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"TeamBuildingEvent","position":7,"name":"Team Building Event","value":"Team Building Event","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Employee\/CustomerRecognition","position":8,"name":"Employee\/Customer Recognition","value":"Employee\/Customer Recognition","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"ProductLaunch","position":9,"name":"Product Launch","value":"Product Launch","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"CompanyAnniversary","position":10,"name":"Company Anniversary","value":"Company Anniversary","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":" HappyHour","position":11,"name":" Happy Hour","value":" Happy Hour","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"BoardMeeting","position":12,"name":"Board Meeting","value":"Board Meeting","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Conference","position":13,"name":"Conference","value":"Conference","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Seminar\/Workshop","position":14,"name":"Seminar\/Workshop","value":"Seminar\/Workshop","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Tradeshow","position":15,"name":"Tradeshow","value":"Tradeshow","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Fundraiser\/CharityEvent","position":16,"name":"Fundraiser\/Charity Event","value":"Fundraiser\/Charity Event","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Potluck","position":17,"name":"Potluck","value":"Potluck","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Tailgating","position":18,"name":"Tailgating","value":"Tailgating","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"SuperBowl","position":19,"name":"Super Bowl","value":"Super Bowl","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"St.Patrick\u2019sDay","position":20,"name":"St. Patrick\u2019s Day","value":"St. Patrick\u2019s Day","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"MemorialDay","position":21,"name":"Memorial Day","value":"Memorial Day","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Halloween","position":22,"name":"Halloween","value":"Halloween","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Thanksgiving","position":23,"name":"Thanksgiving","value":"Thanksgiving","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Christmas","position":24,"name":"Christmas","value":"Christmas","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"},{"id":"Other","position":25,"name":"Other","value":"Other","selected":"false","date":"NULL","musictrack":"","titlecard":"","categoryIconURL":"","categoryColor":"#505461"}];
});

app.directive('eventType', function () {
    return {
        restriction: 'EA',
        scope: {
            mainLabel: '@mainLabel',
            label1: '@label1',
            label2: '@label2',
            model: '=model',
            func: '&func'
        },
        templateUrl: 'views/eventTypeView.html'
    } 
});

app.directive('selectBox', function () {
    return {
        restriction: 'EA',
        scope: {
            mainLabel: '@mainLabel',
            categories: '=selectboxData',
            model: '=model'
        },
        templateUrl: 'views/selectBox.html'
    } 
});

app.directive('inputFormField', function () {
    return {
        restriction: 'EA',
        scope: {
            mainLabel: '@mainLabel',
            placeHolder: '@placeHolder',
            model: '=model'
        },
        templateUrl: 'views/textboxField.html'
    }
});

app.directive('passwordField', function () {
    return {
        restrict: 'E',
        replace : true,
        transclude: true,
        templateUrl: 'views/passwordField.html',
        scope: {
            label: '@',
            minVal: '=min',
            maxVal: '=max',
            fieldValue: '=name'
            
        },
        require: '?ngModel'
    }
});