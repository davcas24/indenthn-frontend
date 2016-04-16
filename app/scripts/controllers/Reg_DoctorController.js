/*angular.module('AngularScaffold.Controllers')
.controller('Reg_DoctorController', ['authService', '$scope', '$rootScope', '$sessionStorage','$state','$location','$anchorScroll','$routeParams',
function (authService, $scope, $rootScope, $sessionStorage,$state,$location,$anchorScroll,$routeParams) {

  $scope.scrollTo = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();
    //reset to old to keep any additional routing logic from kicking in
    $location.hash(old);
  };



}]);*/

angular.module('AngularScaffold.Controllers').controller('Reg_DoctorController', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) {

  $scope.scrollTo = function(id) {
    console.log("PUTAAAA");
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };


    }]);
