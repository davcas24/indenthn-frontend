angular.module('AngularScaffold.Controllers')
  .controller('Reg_PacientController', ['authService', '$scope', '$rootScope', '$sessionStorage','$state',  function (authService, $scope, $rootScope, $sessionStorage,$state) {

      $scope.user = {};

      function clearText() {
        $('#texto').val('');
        $('#texto1').val('');
        $('#texto2').val('');
        $('#texto3').val('');
        $('#texto4').val('');
        $('#texto5').val('');
        $('#texto6').val('');
      }

      $scope.contador = 0;
      $scope.srctodb = "";

      function encodeImageFileAsURL(){

      var filesSelected = document.getElementById("imgup").files;
      if (filesSelected.length > 0)
      {
          var fileToLoad = filesSelected[0];
          if(fileToLoad.size > 100000){
              swal("Error", "Archivo muy grande", "error");
          }else{
          var fileReader = new FileReader();
          fileReader.onload = function(fileLoadedEvent) {
              var srcData = fileLoadedEvent.target.result; // <--- data: base64
              var newImage = document.createElement('img');
              newImage.src = srcData;
              document.getElementById("propic").innerHTML = newImage.outerHTML;
              //$scope.srctodb1 = $('#propic img').attr('src');
              $('#propic img').css({"height" : " 210px"});
              $('#propic img').css({"width" : " 190px"});
              $scope.srctodb = $('#propic img').attr('src');
              console.log($scope.srctodb);
              //alert("Converted Base64 version is "+document.getElementById("propic").innerHTML);
              //console.log("Converted Base64 version is "+document.getElementById("propic").innerHTML);
          }
          fileReader.readAsDataURL(fileToLoad);
          $scope.contador = 1;
      }
    }

    }

    document.getElementById('imgup').addEventListener('change',encodeImageFileAsURL, false);

    $scope.register = function(){
    if($scope.contador == 0){
      $scope.srctodb = "data:image/jpeg;base64,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";
    }
    var user = {nombre: $scope.user.nombre, apellido:  $scope.user.apellido, identidad: $scope.user.identidad,
    telefono:  $scope.user.telefono, correo:  $scope.user.correo, ciudad: $scope.user.ciudad, ubicacion: "",
    image : $scope.srctodb, password:  $scope.user.password,expediente : [],especialidades: [],mensajes:[], scope: ['Paciente']};
      console.log(user);
      authService.Register(user).then(function(response){
          swal("Exito", "Se ha registrado exitosamente", "success");
        //$scope.login({username: user.username, password: user.password});
      }).catch(function(err){
        console.log(err);
        alert(err.data.error + " " + err.data.message);
      })
      clearText();
      $('#propic img').attr('src',' ');
      $('#imgup').val("");
      $state.go('home');
    }
  }]);
