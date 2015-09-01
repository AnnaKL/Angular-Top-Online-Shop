angularShop.factory('ShopFactory', function(Flash){

  var service = {};
  var order = [];
  var prices = [];

  service.order = order;
  service.prices = prices;
  service.total = 0;


service.items = {
  "Women's Footwear": [{
      name: "Suede Shoes, Blue",
      price: 42,
      quantity: 4,
      category: "Womens Footwear",
      image: "img/blue-shoes.png"
  },
  {
      name: "Almond Toe Court Shoes, Patent Black",
      price: 99,
      quantity: 5,
      category: "Womens Footwear",
      image: "img/black-shoes.png"
  }],
  "Women's Formalwear": [{
      name: "Bird Print Dress, Black",
      price: 270,
      quantity: 10,
      category: "Women's Formalwear",
      image: "img/bird-dress.png"
  },
  {
      name: "Mid Twist Cut-Out Dress, Pink",
      price: 540,
      quantity: 5,
      category: "Women's Formalwear",
      image: "img/pink-dress.png"
  }],
  "Women's Casualwear": [{
      name: "Gold Button Cardigan, Black",
      price: 167,
      quantity: 6,
      category: "Women's Casualwear",
      image: "img/black-sweater.png"
  },
  {
      name: "Cotton Shorts, Medium Red",
      price: 30,
      quantity: 5,
      category: "Women's Casualwear",
      image: "img/cotton-shorts.png"
  }],
  "Male Footwear": [{
      name: "Leather Driver Saddle Loafers, Tan",
      price: 34,
      quantity: 12,
      category: "Male Footwear",
      image: "img/leather-brown.png"
  },
  {
      name: "Flip Flops, Red",
      price: 19,
      quantity: 6,
      category: "Male Footwear",
      image: "img/red-flip.png"
  },
  {
      name: "Flip Flops, Blue",
      category: "Male Footwear",
      price: 19,
      quantity: 0,
      category: "Male Footwear",
      image: "img/blue-flip.png"
  }],
  "Male Formalwear": [{
      name: "Sharkskin Waistcoat, Charcoal",
      price: 75,
      quantity: 2,
      category: "Male Formalwear",
      image: "img/waistcoat.png"
  },
  {
      name: "Lightweight Patch Pocket Blazer, Deer",
      price: 175,
      quantity: 1,
      category: "Male Formalwear",
      image: "img/blazer.png"
  }],
  "Male Casualwear": [{
      name: "Fine Stripe Short Sleeve Shirt, Grey",
      price: 49.99,
      quantity: 9,
      category: "Male Casualwear",
      image: "img/shirt.png"
  },
  {
      name: "Fine Stripe Short Sleeve Shirt, Green",
      price: 39.99,
      quantity: 3,
      category: "Male Casualwear",
      image: "img/strip-shirt.png"
  }]
};

service.addToBasket = function(item) {
  order.push(item);
  prices.push(item.price)
  item.quantity-=1;
};

service.removeItemFromBasket = function(item) {
  order.splice(order.indexOf(item), 1);
  prices.splice(prices.indexOf(item.price), 1);
  item.quantity ++;
};

service.totalPrice = function() {
  for (var i = 0; i < prices.length; i++){
     service.total += prices[i];
   }
   return service.total
};

return service;

})

