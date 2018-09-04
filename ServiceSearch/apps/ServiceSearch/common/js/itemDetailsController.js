/*jslint browser:true es5:true devel:true*/
/*global angular*/

(function () {
    "use strict";


    CalendarPickerController.$inject = [
        "$scope"
    ];

    angular
        .module("tmt-calendar-picker")
        .controller("tmtCalendarPickerCtrl", CalendarPickerController);
} ());