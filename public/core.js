	
var app = angular.module("pizzaModule", []);


app.controller("pizzaCtrl", function($scope) {
    
	//pizzaData is an array of JSON objects, we assign it as a $scope variable so we can use Angular directives on it
	 $http.getPizzas('/get')
        .success(function(data) {
            $scope.pizzas = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

	
	
	//can add other functions here to be used with the Angular stuff	
	

	
	
});

