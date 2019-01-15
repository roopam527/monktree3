app.controller('perdetcntrl',function($scope,$location,$http){
	$scope.showme=0;
	$scope.perdet=function(){
		$scope.personal_detail = {
			
			"full_name" : $scope.fullname,
			"email" : $scope.e_mail,
			"fathers_name" : $scope.father_name,
			"dob" : $scope.dob,
			"personal_contact_number" : $scope.contact_per,
			"guardian_contact_number" : $scope.contact_guar,
			"address" : $scope.address,
			"city" : $scope.city,
			"pin_code" : $scope.pin,
			"state" : $scope.state
		};
		$http.post("http://localhost:5000/api/save_personal_details",$scope.personal_detail).then(function successCallback(response){
		$location.path("/aca_det")
		
		},function errorCallback(response){
		$scope.error_message = "Server connectivity error please try again later"
		
	});
	}
});