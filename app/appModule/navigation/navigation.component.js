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

        // vm.recentShows = [
        //     <a href="http://www.titanee.com/occ">Muscat, Oman - Oman Comedy Central</a>,
        //     <a href="https://www.facebook.com/Standuperi/">Tbilisi, Georgia - STANDUP ერი</a>,
        //     <a href="http://www.breakroomdowntown.com/" target="_blank">Topeka, KS - Breakroom</a>,
        //     <a href="#">Kansas City, MO - Stanford and Sons, Kick Comedy Theater, Uptown Arts Bar</a>,
        //     <a href="#">Lawrence, KS - Replay lounge, Jackpot Saloon, Jazzhaus, Oread</a>,
        //     <a href="http://www.riley.army.mil/" target="_blank">Fort Riley, KS - Fort Riley Military Base</a>,
        //     <a href="https://www.facebook.com/zoolarious/" target="_blank">Lincoln, NE - Zoolarious</a>,
        //     <a href="http://www.livekuwait.com/" target="_blank">Kuwait City, Kuwait - The Live Theater, Bayt Lothan</a>,
        //     <a href="http://shitholehq.com" target="_blank">Chicago, IL - The Shit Hole</a>,
        //     <a href="http://drovers-dog.com/" target="_blank">Amsterdam, Netherlands - Drover’s Dog</a>,
        //     <a href="http://www.kitchbar.com/" target="_blank">Toronto, Ontario - Kitch Komedy</a>,
        //     <a href="#">Johannesburg, South Africa - The Box a Goliath and Goliath Production</a>,
        //     <a href="http://www.stregisdoha.com/" target="_blank">Doha, Qatar - Jazz at the Lincoln Center at St. Regis</a>,
        //     <a href="http://thedomainhotels.com/restaurant_1/txoko.en.html" target="_blank">Manama, Bahrain - Txoko Lounge</a>,
        //     <a href="http://www.comedyclubbangkok.com/" target="_blank">Bangkok, Thailand - Comedy Club Bangkok, Stagetime Comedy Club</a>,
        //     <a href="http://sydneycomedyclub.com.au" target="_blank">Sydney, Australia - Sydney Comedy Club, Sydney Fringe Festival</a>,
        //     <a href="http://amicinhand.com/" target="_blank">Sydney, Australia - A Mic In Hand, Comedy Lounge</a>
        // ]
    },
    controllerAs: 'vm'

});
