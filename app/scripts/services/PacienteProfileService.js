angular.module('AngularScaffold.Services').factory('PacienteProfileService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://David:8000/';
		return {

	    };
}]);
