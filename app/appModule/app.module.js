angular.module('appModule', ['ngRoute']).config(
    function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .when('/reviews', {
                template: '<review></review>'
            })
            .otherwise({
                template: '<not-found></not-found>'
            });
    }
);
