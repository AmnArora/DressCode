app.controller('cartController',function($scope,$http,$rootScope,$location,localStorageService){
  if($rootScope.user){
    $scope.name = $rootScope.user.name;
  } else {
    if(localStorageService.get("ActiveUser")){
      $rootScope.user = localStorageService.get("ActiveUser");
      $scope.name = $rootScope.user.name;
      console.log(localStorageService.get("ActiveUser"));
    } else {
      $location.path("/");
    }

  }
  if(localStorageService.get("cartItems")){
    $rootScope.cart = localStorageService.get("cartItems");
    console.log(localStorageService.get("cartItems"));
  }else {
      $rootScope.cart = [];
  }
  var shuffleArray = function(array) {
      var m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }
  $scope.cart = $rootScope.cart;
  $http.get('app/products/products.json').success(function (response) {
    shuffleArray(response);
    $scope.products = response;
  });
  $scope.addToCart = function (product) {
    var found = false;
    $rootScope.cart.forEach(function (item) {
      if (item.id === product.id) {
        item.quantity++;
        found = true;
      }
    });
    if (!found) {
      $rootScope.cart.push(angular.extend({quantity: 1}, product));
    }
    if(localStorageService.isSupported) {
      localStorageService.set('cartItems', $rootScope.cart);
    }
    console.log($rootScope.cart);
  };
  $scope.setProduct = function(product){
    $scope.detail = product;
  };
});
