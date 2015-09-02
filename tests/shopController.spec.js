describe('Shop Controller', function(){
  var control;
  var ShopFactoryMock;


  beforeEach(function() {
      module('angularShop');
  });

  beforeEach(inject(function($controller){
      ShopFactoryMock = jasmine.createSpyObj('shopFactory', ['addToBasket', 'removeItemFromBasket', 'totalPrice ', 'areShoesOrdered', 'applyVoucher', 'makeVouchersAvailable', 'applyFivePoundsVoucher', 'applyTenPoundsVoucher', 'applyFifteenPoundsVoucher'])
      control = $controller('ShopController', {ShopFactory: ShopFactoryMock});
   }));


  it('should have a Shop Factory defined', function() {
    expect(ShopFactoryMock).toBeDefined();
  });

});