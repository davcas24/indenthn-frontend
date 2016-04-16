angular.module('AngularScaffold.Services').factory('adminpageService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
    var baseUrl = "http://David:8000/";
		return {
				GetPendientes: function(){
					return $http.get(baseUrl + "v1/pendientes");
				},
        AuthorizeUpdate: function(payload){
					return $http.put(baseUrl + "v1/authorize",payload);
				}
	    };
}]);
