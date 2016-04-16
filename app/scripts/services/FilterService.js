angular.module('AngularScaffold.Services').factory('FilterService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://David:8000/';
		return {
				GetDoctors: function(){
					return $http.get(baseUrl + "v1/doctors");
				}
	    };
}]);
