describe('Angular shop', function() {

  var firstItem = element.all(by.repeater('item in items').column('item.name')).first();
  var itemQuantity = element.all(by.repeater('item in items').column('item.quantity')).first();
  var basket = element(by.className('.basket'));
  var addToBasket = element(by.repeater('item in items').row(0)).element(by.css('.btn'));
  var basketItem = element.all(by.repeater('(index, item) in control.shop.order track by $index').column('item.name')).first();
  var removeFromBasket = element(by.repeater('(index, item) in control.shop.order track by $index').row(0)).element(by.id('remove'));
  var totalPrice = element(by.id('total-price'));
  var applyFiveVoucher = element(by.id('five-pounds'));
  var applyTenVoucher = element(by.id('ten-pounds'));
  var applyFifteenVoucher = element(by.id('fifteen-pounds'));
  var alertBox = element(by.className('msg'));
  var addNoShoesToBasket = element(by.repeater('item in items').row(2)).element(by.css('.btn'));


  beforeEach(function(){
    browser.get('http://localhost:4567');
  });

   it('has a title', function() {
    expect(browser.getTitle()).toEqual('Angular Top Online Shop');
  });

   it('can display an item from the stock', function(){
    expect(firstItem.getText()).toEqual('Suede Shoes, Blue');
  });

  it('can add item to the basket', function(){
    addToBasket.click();
    expect(basketItem.getText()).toContain('Suede Shoes, Blue');
  });

  it('display out-of-stock button when item quantity is 0', function(){
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    expect(element(by.id('sold')).isPresent()).toBe(true);
  });

  it('updates displayed quantity when item is added to the basket', function(){
    expect(itemQuantity.getText()).toEqual('Quantity: 4');
    addToBasket.click();
    expect(itemQuantity.getText()).toEqual('Quantity: 3');
  });


  it('can calculate and display total price', function(){
    addToBasket.click();
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
  });

  it('can remove item from the basket', function(){
    addToBasket.click();
    expect(basketItem.getText()).toContain('Suede Shoes, Blue');
    removeFromBasket.click();
    expect(basketItem).toBeUndefined;
  });

  it('basket in not visible when total Price is equal to 0', function(){
    expect(basket.isPresent()).toBeFalsy();
  });

  it('updates total price when item removed from the basket', function(){
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    removeFromBasket.click();
     expect(basket.isPresent()).toBeFalsy();
  });

  it('updates total price when 5£ voucher applied', function(){
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyFiveVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £37');
  });

  it('updates total price when 10£ voucher applied', function(){
    addToBasket.click();
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
    applyTenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £74');
  });

  it('10£ voucher can\'t be applied when total price is less than 50', function(){
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyTenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
  });

  it('updates total price when 15£ voucher applied', function(){
    addToBasket.click();
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
    applyFifteenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £69');
  });

  it('15£ voucher can\'t be applied when total price is less than 75', function(){
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyFifteenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
  });

  it('15£ voucher can\'t be applied when order doesn\'t include footwear', function(){
    addNoShoesToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £270');
    applyFifteenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £270');
  });

  it('All three vouchers can be applied when requirements are met', function(){
    addToBasket.click();
    addToBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
    applyFifteenVoucher.click();
    applyTenVoucher.click();
    applyFiveVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £54');
  });
});