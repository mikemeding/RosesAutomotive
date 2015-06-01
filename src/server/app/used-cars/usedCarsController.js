/**
 * Used Car page controller
 */
angular.module('app')
    .controller('UsedCarsCtrl', function UsedCarsCtrl($scope, $http) {
        $scope.title = "Home Page";

        $scope.cars = [
            {
                title: 'Awesome Nissan',
                make: 'Nissan',
                model: '240sx',
                year: '1992',
                miles: '125023',
                engine: '4 Cylinder',
                transmission: 'Manual',
                color: 'black',
                description: 'PRICE LOWERED !!!!!!! 5000 OBO 1990 Nissan 240sx with a 2.4l 4 cylinder automatic transmission in great shape with a nice clean red paint job. The cars body is in excellent shape and the paint is really nice and a bright red color. The car runs great and only has 118k original miles on it. Leather interior with tilt steering Ac and cruise control. This hard to come by classic is in great shape and is 25 years old. Serious inquires only please. The car has a number of newly changed parts within the last 10 months also. It has a new alternator, water pump, belts, plugs wires distributor cap and rotor, and 4 brand new all weather tires that were purchased last winter and have less than 2000 miles on them.'
            },
            {
                title: 'Rusty Shewbaroo',
                make: 'Subaru',
                model: 'Impreza WRX STI',
                year: '2004',
                miles: '562568',
                engine: '4 Cylinder',
                transmission: 'Manual',
                color: 'world rally blue',
                description: 'I am the original owner of this 2002 WRX hatchback. It has very low miles and has received all scheduled maintenance (originally at Ed Reilly, the dealer, and more recently at Weed Family Auto in Concord). The engine runs fantastically - its a lot of fun to drive. The car comes with two sets of original factory alloy rims. The snow tires - Blizzaks - are currently mounted, and were just purchased in February 2015. The other set of rims has all seasons that will need to be replaced. What are the issues? As keeping with a 13 year old NH car, there are some rust spots. Most prominently above the left rear wheel well. There is a small tear in the driver seat upholstery. The car was in its first accident in Spring 2014 - I was rear ended at low speed and the bumper and right rear panels were replaced. No structural damage.The exhaust will need some work. It began running rough in early February this year, and Weed Auto estimates about $1,800 in work will be required to pass inspection (Aug 2015). Thats chiefly why Im discounting the price from the KBB "Fair" amount of $6,100.'
            }
        ]

        var refresh = function() {
            $http.get('/used-cars').success(function(response) {
                console.log("Got data: ");
                console.log(response);
            });
        };

        refresh();

    });
