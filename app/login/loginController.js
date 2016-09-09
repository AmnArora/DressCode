app.controller('loginController',['$scope','$location','$http','$rootScope','localStorageService',function($scope,$location,$http,$rootScope,localStorageService){
  $scope.loginCheck = function(){
    var email = $scope.email;
    var password = $scope.password ;
    $http.get('app/login/users.json')
    .then(function(response,users){
      users = response.data;
      angular.forEach(users,function(user,key){
          if(user.email == email && user.password==password){
            $rootScope.id = user.id;
            $rootScope.user = user;
            if(localStorageService.isSupported) {
              localStorageService.set('ActiveUser', user);
            }
            $location.path("/home");
          }
      });
    });
  };
}]);
