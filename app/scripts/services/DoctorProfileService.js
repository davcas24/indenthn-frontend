angular.module('AngularScaffold.Services').factory('DoctorProfileService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://david:8000/';
		return {
			PostMensaje: function(payload){
				return $http.post(baseUrl + "v1/enviar",payload);
			}
	    };
}]);
