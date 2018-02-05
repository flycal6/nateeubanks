angular.module('appModule', ['ngRoute']).config(
    function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .when('/reviews', {
                template: '<reviews></reviews>'
            })
            .otherwise({
                template: '<not-found></not-found>'
            });
    }
);
