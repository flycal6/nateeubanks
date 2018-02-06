angular.module('appModule').factory('calendarService', function($http) {
    var service = {};

    service.getEvents = function() {

        var calendarId = 'linuxfoundation.org_34363837313836302d343036@resource.calendar.google.com';
        return $http({
            method: 'GET',
            url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId
        });

    };
    return service;
});
