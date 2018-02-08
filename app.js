"use strict";
angular.module('toolkit', [ ])
  .controller('MainCtrl', MainCtrl)
  .controller('SubCtrl', SubCtrl)
  .directive('customDirective', customDirective)
  .factory('someService', someService);

function someService($http){
  return {
    hello: function(msg){
      console.log('someService yells: ' + msg);
    }
  }
};

function customDirective(){
  return{
    restrict: 'EAC',
    template: '<p>And this is the Magic Directive!</p>'
  }
};

function MainCtrl($scope, someService){
  console.clear();
  $scope.name = 'Main';
  someService.hello('hello world!!');
};

function SubCtrl($scope){
  $scope.name = 'Sub';
};
