angular
	.module('angularHangman.main')
	.config(mainConfig);

function mainConfig($stateProvider) {
		$stateProvider.state({
			name: 'main',
			url: '/',
			templateUrl: '/states/main.html',
			controller: 'MainCtrl',
			controllerAs: 'MainVM'
		});
}