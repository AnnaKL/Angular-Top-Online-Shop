angularShop.controller('BasketVisibilityController', function() {

  this.setElement = function(selectedElement) {
    this.element = selectedElement;
  };

  this.isElementSet = function(number) {
    return this.element === number;
  };
})