'use strict';

let app = angular.module('resumeApp', []);

app.controller('headerCtrl', function($scope) {
	$scope.firstname = `MILES`;
	$scope.lastname = `BASNILLO`;
	$scope.greeting = `
		Greetings Stranger! I'm`;
  	$scope.welcome = `
    	Welcome to my page. Have a look around!`;
});
