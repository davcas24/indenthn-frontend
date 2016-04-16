angular.module('AngularScaffold.Services').factory('TablaProfileService', ['$http',
	function($http){
    $http.defaults.withCredentials = true;
    var correo;
    var setcorreo = function(email){
      correo = email;
    }

    var getcorreo = function(){
      return correo;
    }

		var baseUrl = 'http://David:8000/';
		return {
      setcorreo : setcorreo,
      getcorreo : getcorreo,
      GetUser : function(correo1){
				return $http.get(baseUrl + "v1/usuario/" + correo1);
			}
	    };
}]);
