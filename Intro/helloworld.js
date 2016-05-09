angular.module("helloworld", [])
	.controller("simple", function($scope){
	$scope.message = "Hello world from angular";
	$scope.message2 = "haha";
});
