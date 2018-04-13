(function () {
'use strict';

// Declare module controllers and service
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);




//Inject tobuy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.pruchaseItems();
  tobuy.bought = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}
// Inject Bought
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.itemsPurchased();
}

//checkoff service
function ShoppingListCheckOffService() {
  var service = this;
// tobuy list declare
  var itemsToBuy = toBuyList;
// boughtlist declare
  var boughtItems = boughtList;

//Move item to bougth list
  service.buyItem = function (itemIndex) {
	var item =  itemsToBuy[itemIndex];
	service.addBoughtItem(item);
    removeFromItemsToBuy(itemIndex);
  };

  service.pruchaseItems = function () {
    return itemsToBuy;
  };

  service.itemsPurchased = function () {
    return boughtItems;
  };

  service.addBoughtItem = function (item) {
    boughtItems.push(item);
  };

//tobuy list remove index
  function removeFromItemsToBuy(itemIndex) {
	  itemsToBuy.splice(itemIndex, 1);
  };
}

//buy list array values
var toBuyList = [
	{ name: "Eggs", quantity: 12 },
	{ name: "Bread", quantity: 1 },
	{ name: "Water", quantity: 36 },
	{ name: "Vitamins", quantity: 1 },
	{ name: "Bananas", quantity: 6 }
];
//emtpy bought list
var boughtList = [];
})();
