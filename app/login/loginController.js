angular.module('dresscode',['ngRoute'])
.controller('loginController',['$scope','$routeParams',function($scope,$routeParams){
  $scope.loginCheck = function(){
    var email = $scope.email;
    var password = $scope.password ;
    if(login(email,password)){
      
    }
  };
  function login(e,p){
    if(e == 'amanarora.ar@gmail.com' && p == '111111')
      return true;
    else return false;
  }
}]);
