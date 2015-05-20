angular.module('app', ['ui.router'])

    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("home");
        // states
        $stateProvider
            // Client Routing
            .state("home", {
                url: "/home",
                templateUrl: "app/home/homeView.html",
                controller: "HomeCtrl as vm"
            })
            .state("location", {
                url: "/location",
                templateUrl: "app/location/locationView.html",
                controller: "LocationCtrl as vm"
            })
            .state("about", {
                url: "/about",
                templateUrl: "app/about/aboutView.html",
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




