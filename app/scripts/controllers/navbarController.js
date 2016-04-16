angular.module('AngularScaffold.Controllers')
  .controller('navbarController', ['authService', '$scope', '$rootScope', '$sessionStorage','$state',  function (authService, $scope, $rootScope, $sessionStorage,$state) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      //$scope.isadmin = false;
      //$scope.Mod = {text: ""};
      //$scope.Add = {text: ""};|

      $scope.wheretogo = function(){
        if($sessionStorage.currentUser.scope.indexOf('admin') > -1){
          $scope.goadmin();
        }
        else if($sessionStorage.currentUser.scope.indexOf('Doctor') > -1){
          $scope.goDocPro();
        }
        else if($sessionStorage.currentUser.scope.indexOf('Paciente') > -1){
          $scope.goPacPro();
        }else{
          $scope.goHome();
        }
      }

      $scope.goHome = function(){
  		    $state.go('home');
          console.log("home");
      }

      $scope.goPM = function(){
  		    $state.go('planesmedicos');
          console.log("register");
      }

      $scope.goFilter_page = function(){
  		    $state.go('portafolio');
          console.log("filter");
      }

      $scope.goEdit=function(){
        if($sessionStorage.currentUser.scope.indexOf("Doctor") > -1){
          $state.go('editdoctor');
        }else if($sessionStorage.currentUser.scope.indexOf("Paciente") > -1){
          $state.go('editpaciente');
        }
      }

      $scope.goReg_pac = function(){
  		    $state.go('registrarpaciente');
          console.log("register");
      }

      $scope.goadmin = function(){
        $state.go('adminpage');
      }

      $scope.gous = function(){
        $state.go('aboutus');
      }

      $scope.goPacPro = function(){
        $state.go('perfilpaciente');
      }

      $scope.goDocPro = function(){
        $state.go('contacto');
      }

      $scope.logout = function(){
        //alert($sessionStorage.currentUser.scope);
        authService.Logout().then(function(response){
          swal("Cerrar Sesion", "Se ha cerrado sesion exitosamente", "success");
          $sessionStorage.$reset();
          $state.go('home');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
          console.log("ERROR");
        })
      }

      $scope.isDoctor = function(){
        if($sessionStorage.currentUser){
          if($sessionStorage.currentUser.scope.indexOf('Doctor') > -1){
          return true;
          }
        }
        return false;
      }

      $scope.isAdmin = function(){
        if($sessionStorage.currentUser){
          if($sessionStorage.currentUser.scope.indexOf('admin') > -1){
          return true;
          }
        }
        return false;
      }


      /*$scope.returneduser = {};
       function getuser1(usermail){
         $scope.usuario = {};
         $scope.arreglo = [];
        authService.GetUser(usermail).then(function(response){
            $scope.usuario = response.data;
              console.log($scope.usuario[0].scope);
              console.log(response.data);
            if($scope.usuario[0].scope.indexOf("Pendiente")>-1){
              console.log("si");
              return true;
            }else{
              return false;
            }

        }).catch(function(err){
          alert(err.data.error + " " + err.data.message + "frontend");
        });
      }*/

      $scope.login = function(user){
          authService.Login(user).then(function(response){
            $sessionStorage.currentUser = response.data;
            //$("#mainlogo").attr("src",$sessionStorage.currentUser.image);
            console.log($sessionStorage.currentUser);
            if($sessionStorage.currentUser.scope.indexOf("admin") > -1){
              $state.go('adminpage');
              console.log("si");
            }else if($sessionStorage.currentUser.scope.indexOf("Pendiente") > -1){
              console.log("out");
              swal("Error", "Su cuenta no ha sido activada", "error");;
              $sessionStorage.$reset();
            }else if($sessionStorage.currentUser.scope.indexOf("Doctor") > -1){
              $state.go('perfildoctor');
            }else if($sessionStorage.currentUser.scope.indexOf("Paciente") > -1){
              $state.go('perfilpaciente');
            }
            $scope.user = {};
          }).catch(function(err){
            alert(err.data.error + " " + err.data.message);
          });

      }

  }]);
