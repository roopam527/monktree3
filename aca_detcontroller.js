app.controller('acadetcntrl',function($scope,$location,$http){
	// $scope.course="btech";
	// $scope.institute="Delhi Technical University";
	if($scope.course=="btech"){
		$http.get("http://localhost:5000/api/search_college/"+$scope.course).then(function(response){
			$scope.insti = response.data.collegeNames;
		});
	}else if($scope.course=="diploma"){
		$http.get("http://localhost:5000/api/search_college/diploma").then(function(response){
			$scope.insti = response.data.collegeNames;
		});
	}
	// if($scope.course){
	// 	$http.get("http://localhost:5000/api/search_college/"+$scope.course).then(function(response){
	// 		$scope.insti = response.data.collegeNames;
	// 	});
	// }
	if($scope.institute){
		$http.get("http://localhost:5000/api/search_branch/"+$scope.course+"?college="+$scope.institute).then(function(response){
			$scope.bran = response.data.matchBranches;
		});
	 }
	
	$scope.acadet=function(){
		$scope.academic_detail = {
			"institution" : $scope.institute,
			"branch" : $scope.branch,
			"course" : $scope.course,
			"admissionYear" : $scope.admission,
			"complitionYear" : $scope.year,
			"course_duration" : $scope.duration,
			"aadharNumber" : $scope.enroll
		};
		$http.post("http://localhost:5000/api/save_academic_details",$scope.acdemic_detail).then(function successCallback(response){
			$location.path("/thankyou");
			
		},function errorCallback(response){
			$scope.error_message = "Server connectivity error please try again later";
			
		});
	}
});