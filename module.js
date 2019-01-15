var app = angular.module('myApp',['ngRoute','ngAnimate']);
app.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/monktree',{
		templateUrl : "monktree/edge.html",
		controller: "cntrl"
	}).when('/sign_up',{
		templateUrl : "monktree/sign_up.html",
		controller:"signupcntrl"
	}).when('/sign_in',{
		templateUrl : "monktree/sign_in.html",
		controller: "signincntrl"
	}).when('/per_det',{
		templateUrl : "monktree/personaldet.html",
		controller: "perdetcntrl"
	}).when('/aca_det',{
		templateUrl : "monktree/academicdet.html",
		controller: "acadetcntrl"
	}).when('/thankyou',{
		templateUrl : "monktree/thank.html"
	}).otherwise({
		templateUrl : "monktree/notfound.html"
	})
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
})