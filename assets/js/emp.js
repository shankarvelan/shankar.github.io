var obj=angular.module("Myapp",["ngRoute","ngSanitize"]);
obj.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'inx.html'
})

.when('/user1',{
		templateUrl:'user1.html'
})
.when('/user2',{
		templateUrl:'user2.html'
})

.otherwise('/',{
		redirectTo:'/'
	})
});
