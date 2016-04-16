angular.module('AngularScaffold.Controllers')
  .controller('adminpageController', ['adminpageService', '$scope', '$rootScope', '$sessionStorage',  function (adminpageService, $scope, $rootScope, $sessionStorage) {

    $scope.PartDoctors = [];
    $scope.user = {};
    //$scope.tableuser = {};

    /*$scope.gettableuser = function(tbuser){
      $scope.user = tbuser;
      console.log($scope.user);
      $scope.authorize();
    }*/

    $scope.getPendientes = function(){
      adminpageService.GetPendientes().then(function(response){
      $scope.PartDoctors = response.data;
      console.log("----------------------");
      for (var i = 0; i < $scope.PartDoctors.length; i++) {
        console.log($scope.PartDoctors[i]);
      }
      }).catch(function(err){
        console.log(err);
        //alert(err.data.error + " " + err.data.message);
      })
    }

    window.onload = $scope.getPendientes();

    $scope.authorize = function(tbuser){
      $scope.getPendientes();
      adminpageService.AuthorizeUpdate(tbuser).then(function(response){
        swal("Exito!", "Paciente Autorizado", "success");
      }).catch(function(err){
        console.log(err);
      })
    }

  }]);
