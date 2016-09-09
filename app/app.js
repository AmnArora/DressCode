var app = angular.module('dresscode',['ngRoute','ngAnimate','LocalStorageModule']);
app.config(['$routeProvider','localStorageServiceProvider', function($routeProvider,localStorageServiceProvider) {
  localStorageServiceProvider
  .setPrefix('dresscode');
  localStorageServiceProvider
  .setStorageType('sessionStorage');
   $routeProvider
   .when('/', {
      templateUrl: 'app/dresscode/dresscode.html',
      controller: 'loginController'
   })
   .when('/home', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller:'cartController'
   })
   .when('/cart', {
      templateUrl: 'app/cart/cart.html',
      controller:'cart'
   })
   .when('/logout', {
     templateUrl: 'app/logout/logout.html',
     controller:'logout'
    })
   .otherwise({ redirectTo: '/' });
}]);
