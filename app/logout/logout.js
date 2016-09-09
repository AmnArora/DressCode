app.controller('logout',['$scope','$location','$http','$rootScope','localStorageService',function($scope,$location,$http,$rootScope,localStorageService){
  if(localStorageService.get("ActiveUser")){
    localStorageService.remove("ActiveUser");
  } else {
    $location.path("/");
  }
}]);
