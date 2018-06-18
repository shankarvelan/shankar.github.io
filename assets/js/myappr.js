var app=angular.module("Myapp",["ngRoute"]);
app.config(function($routeProvider)
{
	$routeProvider
	.when("/",
	{
		templateUrl:"views/home.html"
	})
	.when("/home",
	{
		templateUrl:"views/home.html"
	})
	.when("/men",
	{
		templateUrl:"views/men.html"
	})
	.when("/women",
	{
		templateUrl:"views/women.html"
	})
	.when("/kids",
	{
		templateUrl:"views/kids.html"
	})	
});