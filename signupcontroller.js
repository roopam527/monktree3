app.controller('signupcntrl',function($scope,$location,$http){
	$scope.showme = 0;

	$scope.google = function(){
		$http.get("http://localhost:5000/auth/google").then(function(resp){
			
		})
	}

	$scope.signup=function(){
		$scope.register = {
			"username" : $scope.email,
			"password" : $scope.pass
		};
		$http.post("http://localhost:5000/auth/local_register",$scope.register).then(function successCallback(response){
		$location.path("/sign_in")
		
	},function errorCallback(response){
		$scope.error_message = "Server connectivity error please try again later"
		
	})
	};
});
