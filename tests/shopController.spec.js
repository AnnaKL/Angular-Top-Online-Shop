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


  it('should have a Game Factory defined', function() {
    expect(ShopFactoryMock).toBeDefined();
  });

  it('can set a tab to particular number', function(){
    control.setTab(1);
    expect(control.tab).toEqual(1);
  });

  it('return true if tab is set to particular number', function(){
    control.setTab(1);
    expect(control.isSet(1)).toEqual(true);
  });

  it('return false if tab is not set to particular number', function(){
    control.setTab(2);
    expect(control.isSet(1)).toEqual(false);
  });

});