app.controller('signincntrl',function($scope,$location,$http){
	$scope.showme = 0;
	$scope.signin = function(){
		$scope.login = {
			"username" : $scope.username,
			"password" : $scope.pass
		};
		$http.post("http://monktree.ap-south-1.elasticbeanstalk.com/auth/local_login",$scope.login).then(function successCallback(response){
		$location.path("/per_det")
		
	},function errorCallback(response){
		$scope.error_message = "Server connectivity error please try again later"
		
	});
	}
});
