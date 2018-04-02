import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Bitacoras} from '../../api/bitacoras';
import template from './bitacora.html';


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
      mapacheCora(){
        return Bitacoras.find({});
      }
    });
    $scope.insertInfo = function(){
		
			Tasks.insert({
				id_cont : $scope.inI,
				nombre : $scope.nameInfo,
				fecha : $scope.quanInfo,
                instrumento : $scope.instrum,
                textoclase : $scope.infoExtra

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
		
	

export default angular.module('bitMod', [angularMeteor]).component('bitacoraMapu', {
	templateUrl : 'imports/components/bitacora/bitacora.html', controller : ["$scope",Controlador]
});