var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('inicio');
	$stateProvider
        .state('home', {
            url: '/inicio',
            templateUrl: '/views/home.html',
            controller: 'homeController'
        })
				.state('planesmedicos', {
            url: '/planesmedicos',
            templateUrl: './views/Reg_Doctor.html',
            controller: 'Reg_DoctorController'
        })
				.state('registrarpaciente', {
            url: '/registrarpaciente',
            templateUrl: './views/Reg_Pacient.html',
            controller: 'Reg_PacientController'
        })
				.state('adminpage', {
            url: '/adminpage',
            templateUrl: './views/adminpage.html',
            controller: 'adminpageController'
        })
				.state('aboutus', {
            url: '/aboutus',
            templateUrl: './views/FilterPage.html',
            controller: 'FilterController'
        })
				.state('editdoctor', {
            url: '/editarperfil',
            templateUrl: './views/EditProfile_Doctor.html',
            controller: 'EditDoctorController'
        })
				.state('portafolio', {
            url: '/portafolio',
            templateUrl: './views/EditProfile_Pacient.html',
            controller: 'EditPacienteController'
        })
				.state('contacto', {
            url: '/contacto',
            templateUrl: './views/Doctor_Profile.html',
            controller: 'DoctorProfileController'
        })
				.state('perfilpaciente', {
            url: '/perfilpaciente',
            templateUrl: './views/Pacient_Profile.html',
            controller: 'PacienteProfileController'
        })

}]);
