angular.module('appModule').component('reviews', {
  templateUrl: 'app/appModule/review/review.component.html',
  controller: function($location) {
    var vm = this;

    vm.showReviews = function() {
        $location.path('/reviews');
    };
  },
  controllerAs: 'vm'

});
