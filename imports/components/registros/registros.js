import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Tasks} from '../../api/tasks.js';
import template from './registros.html';


 $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {  }, // A function to be called when sideNav is opened
      onClose: function(el) {  }, // A function to be called when sideNav is closed
    }
  );
     
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


class Controlador {
	constructor($scope){

    $scope.helpers({
      mapachelist(){
        return Tasks.find({});
      }
    });
    $scope.insertInfo = function(){
		
			Tasks.insert({
				id_emp : $scope.inI,
				nombre : $scope.nameInfo,
				cantidad : $scope.quanInfo,
				extra : $scope.extraInfo,

			});
			Materialize.toast('objeto agregado.', 4000);
		}

		$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
 		$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {  }, // A function to be called when sideNav is opened
      onClose: function(el) {  }, // A function to be called when sideNav is closed
    }
  );
     
 $(document).ready(function(){
      $('.carousel').carousel();
    });


	  $(document).ready(function(){
      $('.slider').slider();
    });

   
   

  }

}
		
	

export default angular.module('regMod', [angularMeteor]).component('regMapu', {
	templateUrl : 'imports/components/registros/registros.html', controller : ["$scope",Controlador]
});