angularShop.controller('ShopController', ['ShopFactory', function(ShopFactory) {
  this.shop = ShopFactory;

  this.setTab = function(selectedTab) {
    this.tab = selectedTab;
  };

  this.isSet = function(number) {
    return this.tab === number;
  };

}])