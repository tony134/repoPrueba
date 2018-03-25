import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from '@uirouter/angularjs';
import homeMapu from '../imports/components/home/home';
import regMapu from '/imports/components/registros/registros'




var app = angular.module('mapu', [angularMeteor, uiRouter, homeMapu.name, regMapu.name]);

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) {  }, // A function to be called when sideNav is opened
    onClose: function(el) {  }, // A function to be called when sideNav is closed
  }
);

app.controller('contr', ["$scope", function($scope){



}]);

app.config(function($stateProvider, $urlRouterProvider){
	

	$urlRouterProvider.otherwise("/");
	
	$stateProvider.state({
        name : "home",
		url : "/",
		component : 'homeMapu'

        })
        
	 .state({
        name : "registros",
	 	url : "/registros",
	 	component : 'regMapu'
	 })
	
	
});