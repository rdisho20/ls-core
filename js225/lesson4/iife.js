/*
(function(type, name) {
  var myPet = {
    type,
    name,
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
})('Dog', 'Spot');
*/

/*
let inventory = (function() {
  let stocks = [];

  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  }

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
    getStocks() {
      return stocks;
    }
  };
})();
*/


let inventory = function() {
  let stocks = [];

  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  }

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
    getStocks() {
      return stocks;
    }
  };
};


inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

console.log(inventory.getStocks());
// results in an error