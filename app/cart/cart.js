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
    $scope.display = true;
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
    $scope.total = total/2;
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
    if($rootScope.cart.length==0){
      $rootScope.display = false;
    }
    console.log($rootScope.cart);
  };
  $scope.discount = false;
  $scope.applyCoupon = function(){
    if($scope.coupon == "DC50" || $scope.coupon=="dc50"){
        console.log($scope.getCartPrice()/2);
        $scope.total = $scope.getCartPrice()/2;
        $scope.discount = true;
    } else {
      $scope.discount = false;
    }
  };
});
