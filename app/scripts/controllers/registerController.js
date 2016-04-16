angular.module('AngularScaffold.Controllers')
  .controller('RegisterController', ['AuthService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      //$scope.Mod = {text: ""};
      //$scope.Add = {text: ""};


      $scope.register = function(){
        //var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['regular']};
        authService.Register(user).then(function(response){
          swal("Exito", "Se ha registrado exitosamente", "success");
          //$scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }
  }]);
