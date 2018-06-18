obj.controller("MyController",function($scope,$location){
	//alert("controller");
	$scope.login=function()
	{
		if($scope.user =="Shankar" && $scope.password=="admin1"){
			$location.path('/user1');
		}	
		if($scope.email =="Vinoth" && $scope.password=="admin2"){
			$location.path('/user2');
		}	
		
		
		}
	
	
});