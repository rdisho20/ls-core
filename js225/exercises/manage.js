class ItemCreator {
  static generateSKU(itemName, category) {
    let code = '';
    itemName = itemName.split(' ');

    if (itemName.length > 1) {
      const firstWord = itemName[0];
      if (firstWord.length === 2) {
        const secondWord = itemName[1]
        code += firstWord + secondWord[0];
        code += category.slice(0, 2);

        return code.toUpperCase();
      }
    }

    code += itemName[0].slice(0, 3);
    code += category.slice(0, 2);

    return code.toUpperCase();
  }

  static validName(itemName) {
    return /^(\S\s*){5,}$/.test(itemName);
  }

  static validCategory(category) {
    return /^[a-zA-Z]{5,}$/.test(category);
  }

  constructor(itemName, category, quantity) {
    if (!ItemCreator.validName(itemName) ||
    !ItemCreator.validCategory(category) ||
    quantity === undefined) {
      return { notValid: true };
    }

    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.skuCode = ItemCreator.generateSKU(this.itemName, this.category);
  }
}


class ItemManager {
  static items = [];

  static create(itemName, category, quantity) {
    const newItem = new ItemCreator(itemName, category, quantity);

    if (newItem.hasOwnProperty('notValid') && newItem.notValid) return false;

    ItemManager.items.push(newItem);
  }

  static getItemBySKU(skuCode) {
    return ItemManager.items.find(item => {
      return skuCode === item.skuCode;
    })
  }

  static update(skuCode, itemInfo) {
    const obj = ItemManager.getItemBySKU(skuCode);

    for (let [key, value] of Object.entries(itemInfo)) {
      obj[key] = value;
    }
  }

  static delete(skuCode) {
    const obj = ItemManager.getItemBySKU(skuCode);
    const index = ItemManager.items.indexOf(obj);
    ItemManager.items.splice(index, 1);
  }

  static inStock() {
    return ItemManager.items.filter(item => item.quantity > 0);
  }

  static itemsInCategory(category) {
    return ItemManager.items.filter(item => item.category === category);
  }
}


class ReportManager {
  static activeManager;

  static init(itemManager) {
    ReportManager.activeManager = itemManager;
  }

  static createReporter(skuCode) {
    const item = ReportManager.activeManager.getItemBySKU(skuCode);

    return {
      itemInfo() {
        for (let [key, value] of Object.entries(item)) {
          console.log(`${key}: ${value}`);
        }
      },
    }
  }

  static reportInStock() {
    const report = [];
    ReportManager.activeManager.inStock().forEach(item => {
      report.push(item.itemName);
    })

    console.log(report.join(','));
  }
}


ItemManager.create('basket ball', 'sports', 0);
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);

console.log(ItemManager.items);
console.log('------------------------------------------------------------');

ReportManager.init(ItemManager);
console.log(ReportManager.activeManager);
ReportManager.reportInStock();
console.log('------------------------------------------------------------');

ItemManager.update('SOCSP', {quantity: 0});
console.log(ItemManager.inStock());
console.log('------------------------------------------------------------');

ReportManager.reportInStock();
console.log(ItemManager.itemsInCategory('sports'));
console.log('------------------------------------------------------------');

ItemManager.delete('SOCSP');
console.log(ItemManager.items);
console.log('------------------------------------------------------------');

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
console.log('------------------------------------------------------------');

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();



