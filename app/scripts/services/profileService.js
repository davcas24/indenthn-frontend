angular.module('AngularScaffold.Services').factory('profileService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "http://David:8000/";
		return {
				GetUser: function(){
					return $http.get(baseUrl + "v1/logout");
				}
	    };
}]);
