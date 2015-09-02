describe('Basket Visibility Controller', function(){

  beforeEach(function() {
      module('angularShop');
  });

  beforeEach(inject(function($controller){
      navigation = $controller('BasketVisibilityController');
   }));

  it('can assign an element to particular number', function(){
    navigation.setElement(1);
    expect(navigation.element).toEqual(1);
  });

  it('return true if element is set to particular number', function(){
    navigation.setElement(1);
    expect(navigation.isElementSet(1)).toEqual(true);
  });

  it('return false if element is not set to particular number', function(){
    navigation.setElement(2);
    expect(navigation.isElementSet(1)).toEqual(false);
  });

});