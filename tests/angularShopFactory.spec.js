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

  it('can remove an item form stock and update quantity', function(){
    expect(items[0].quantity).toEqual(4);
    shop.addToBasket(items[0]);
    expect(shop.order[0].quantity).toEqual(3);
  });

  it('can calculate total order price of the basket', function(){
    shop.addToBasket(items[0]);
    expect(shop.totalPrice()).toEqual(42);
  });

  it('can calculate total price of more than one item', function(){
    shop.addToBasket(items[0]);
    shop.addToBasket(items[0]);
    shop.addToBasket(items[0]);
    expect(shop.totalPrice()).toEqual(126);
  });

  it('can remove item from the basket', function(){
    shop.addToBasket(items[0]);
    expect(shop.order.length).toEqual(1);
    shop.removeItemFromBasket(items[0]);
    expect(shop.order.length).toEqual(0);
  });

  it('updates total price when item returned to stock', function(){
    shop.addToBasket(items[0]);
    expect(shop.totalPrice()).toEqual(42);
    shop.removeItemFromBasket(items[0]);
    expect(shop.totalPrice()).toEqual(0);
  });

  it('updates quantity when item returned to stock', function(){
    expect(items[0].quantity).toEqual(4);
    shop.addToBasket(items[0]);
    expect(items[0].quantity).toEqual(3);
    shop.removeItemFromBasket(items[0])
    expect(items[0].quantity).toEqual(4);
  });

  it('allows £5 voucher to be applied', function(){
    shop.addToBasket(items[0]);
    expect(shop.totalPrice()).toEqual(42);
    shop.applyVoucher(5);
    expect(shop.totalPrice()).toEqual(37);
  });

  it('£5 voucher can\'t be applied twice', function(){
    shop.addToBasket(items[0]);
    expect(shop.totalPrice()).toEqual(42);
    shop.applyVoucher(5);
    shop.applyVoucher(5);
    expect(shop.totalPrice()).toEqual(37);
  });

  it('£5 voucher can\'t be apploed when order is equal 0', function(){
    expect(shop.totalPrice()).toEqual(0);
    shop.applyVoucher(5);
    expect(shop.totalPrice()).toEqual(0);
  });



});