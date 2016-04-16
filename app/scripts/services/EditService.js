angular.module('AngularScaffold.Services').factory('EditService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://David:8000/';
		return {

	    };
}]);
