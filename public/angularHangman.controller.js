angular
	.module('angularHangman', [
		'iu.router'
		])
	.config(angularHangmanConfig);

function angularHangmanConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

	}