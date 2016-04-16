angular.module('AngularScaffold.Services').factory('authService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "http://David:8000/";
		return {
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
        },
				GetUser : function(correo){
          return $http.get(baseUrl + "v1/usuario/" + correo);
        }
	    };
}]);
