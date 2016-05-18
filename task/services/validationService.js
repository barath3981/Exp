/**
 * Created by bhanu on 18/5/16.
 */


taskApp.service('validationService', [function () {

    return{

        validateText : function(text, validateMessage) {

            if (text) {

                if (text.trim().length == 0 || text == undefined) {

                    if(validateMessage != undefined) { console.log(validateMessage+' FAILED 1'); }

                    return false;

                } else {

                    if(validateMessage != undefined) { console.log(validateMessage+' SUCCESS');}

                    return true;

                }

            } else {

                if(validateMessage != undefined) { console.log(validateMessage+' FAILED 2'); }

                return false;

            }

        },

        phoneNumber: function(number, validateMessage) {

            if(number != undefined){

                var regexp = (/^(\(?([0-9]{3})\)?)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

                if(number.length == 10 && regexp.test(number)) {

                    console.log(validateMessage + ' SUCCESS');

                    return true;

                } else {

                    console.log(validateMessage+' FAILED 1');

                    return false;

                }

            } else {

                console.log(validateMessage+' FAILED 2');

                return false;

            }

        },

        validateEmail: function(emailVal, validateMessage) {

            var regexp = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            if (emailVal) {

                if (emailVal.trim().length == 0 || emailVal == undefined) {

                    console.log(validateMessage+' FAILED 1');

                    return false;

                } else {

                    if(regexp.test(emailVal)) {

                        console.log(validateMessage+" SUCCESS");

                        return true;

                    } else {

                        console.log(validateMessage+" FAILED2");

                        return false;

                    }

                }

            } else {

                console.log(validateMessage+' FAILED 3');

                return false;

            }

        }

    }

}]);