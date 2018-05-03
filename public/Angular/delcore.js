	
var app = angular.module("pizzaModule", []);


app.controller("pizzaCtrl", function($scope) {
    
	//pizzaData is an array of JSON objects, we assign it as a $scope variable so we can use Angular directives on it
	$scope.pizzas = pizzaData;
		
	//can add other functions here to be used with the Angular stuff	
	

	
	
});

