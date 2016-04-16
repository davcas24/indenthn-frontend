angular.module('AngularScaffold.Controllers')
  .controller('PacienteProfileController', ['$scope', 'PacienteProfileService', '$sessionStorage','$state', function ($scope, PacienteProfileService, $sessionStorage,$state) {
    $scope.exp = [];
    $scope.messages = [];

    $scope.cargarDatos = function(){
      var name = $sessionStorage.currentUser.nombre + "   " + $sessionStorage.currentUser.apellido;
      document.getElementById("Account_Name").innerHTML = name;
      var newImg = document.createElement('img');
      newImg.src = $sessionStorage.currentUser.image;
      //console.log($sessionStorage.currentUser.image);
      document.getElementById("Profile_Image").innerHTML = newImg.outerHTML;
      $('#Profile_Image img').css({"height" : " 210px"});
      $('#Profile_Image img').css({"width" : " 190px"});
      $scope.exp = $sessionStorage.currentUser.expediente;
      $scope.messages = $sessionStorage.currentUser.mensajes;
    }

    window.onload = $scope.cargarDatos();

}]);
