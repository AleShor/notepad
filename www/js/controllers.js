angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  var storage = function(){
    var id = "notepadText";
    if(typeof localStorage[id] === 'undefined'){
      localStorage[id] = '';
    }
    return {
      get: function(){
        return localStorage[id];
      },
      set: function(text){
        localStorage[id] = text;
      },
      clear: function(){
        localStorage[id] = '';
      }
    }
  }

  var note = function(){
    var textClass = '.textbox';
    return {
      get: function(){
        return document.querySelector(textClass).value;
      },
      set: function(text){
        document.querySelector(textClass).value = text;
      },
      clear: function(){
        this.set('');
      }
    }
  };

  $timeout(function(){
    note().set(storage().get());
  });

  $scope.saveNote = function(){
    storage().set(note().get());
  }

  $scope.clearNote = function(){
    note().clear();
    storage().clear();
  }

  $scope.exit = function(){
    ionic.Platform.exitApp();
    window.close();
  }

})

