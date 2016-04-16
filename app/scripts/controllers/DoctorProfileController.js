angular.module('AngularScaffold.Controllers')
  .controller('DoctorProfileController', ['$scope', 'DoctorProfileService','$sessionStorage','$state', function ($scope, DoctorProfileService, $sessionStorage,$state) {
    $scope.mensaje1 = {};

    function clearText() {
        $('#texto').val('');
        $('#texto1').val('');
        $('#texto2').val('');
        $('#texto3').val('');
      }

    $scope.send = function(){
      var d = new Date();
      var strDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
      console.log(strDate);
      var mensaje = {nombre:$scope.mensaje1.nombre,correo:$scope.mensaje1.correo,asunto:$scope.mensaje1.asunto,mensaje:$scope.mensaje1.mensaje,fecha:strDate};
      DoctorProfileService.PostMensaje(mensaje).then(function(response){
        clearText();
      }).catch(function(err){
        console.log(err);
        //alert(err.data.error + " " + err.data.message);
      })
    }


    //window.onload = initMap();
}]);
