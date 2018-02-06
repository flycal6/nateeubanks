angular.module('appModule').component('navigation', {
    templateUrl: 'app/appModule/navigation/navigation.component.html',
    controller: function($location, calendarService) {
        var vm = this;

        vm.showReviews = function() {
            $location.path('/reviews');
        };

        vm.goHome = function() {
            $location.path('/');
        };

        vm.getEvents = function() {
            calendarService.getEvents().then(function(res) {
                console.log(res);
            }).catch(function(err) {
                console.log(err);
            });
        };
    },
    controllerAs: 'vm'

});
