app.controller('cart',function($scope,$http,$rootScope,$location,localStorageService){
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
  $scope.cart = $rootScope.cart;
  $scope.getCartPrice = function(){
    var total = 0;
    $scope.cart.forEach(function (product) {
      total += product.price * product.quantity;
      console.log(product.quantity);
    });
    return total;
  };
  $scope.removeFromCart = function (product) {
    var newCart = [];
    $rootScope.cart.forEach(function (item) {
      if (item.id != product.id) {
        newCart.push(item);
      }
    });
    $scope.cart = newCart;
    $rootScope.cart = newCart;
    if(localStorageService.isSupported) {
      localStorageService.set('cartItems', $rootScope.cart);
    }
    console.log($rootScope.cart);
  };
});
