angular.module('appModule').component('navigation', {
  templateUrl: 'app/appModule/navigation/navigation.component.html',
  controller: function($location) {
    var vm = this;

    vm.showReviews = function() {
        $location.path('/reviews');
    };

    vm.goHome = function() {
        $location.path('/');
    };
  },
  controllerAs: 'vm'

});
