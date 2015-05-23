angular.module('app', ['ui.router'])

    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("home");
        // states
        $stateProvider
            // Client Routing
            .state("home", {
                url: "/home",
                templateUrl: "home/homeView.html",
                controller: "HomeCtrl as vm"
            })
            .state("location", {
                url: "/location",
                templateUrl: "location/locationView.html",
                controller: "LocationCtrl as vm"
            })
            .state("used-cars", {
                url: "/used-cars",
                templateUrl: "used-cars/usedCarsView.html",
                controller: "UsedCarsCtrl as vm"
            })
            .state("about", {
                url: "/about",
                templateUrl: "about/aboutView.html",
                controller: "AboutCtrl as vm"
            });
    })
    .controller('AppCtrl', AppCtrl);

function AppCtrl($scope, $location) {
    $scope.title = "Roses Automotive";

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('page change successful');
    });
}




