describe('Shop factory', function(){

  var shop
  var items

 beforeEach(function() {
      module('angularShop');
  });

 beforeEach(inject(function(ShopFactory) {
    shop = ShopFactory
    items = [{
        name: "Suede Shoes, Blue",
        price: 42,
        quantity: 4,
        category: "Womens Footwear",
      },
      {
        name: "Sharkskin Waistcoat, Charcoal",
        price: 75,
        quantity: 2,
        category: "Male Formalwear",
      }]
  }));


  it('can add item do the basket', function(){
    shop.addToBasket(items[0]);
    expect(shop.order).toEqual([{name: "Suede Shoes, Blue", price: 42, quantity: 3, category: "Womens Footwear"}])
  });


});