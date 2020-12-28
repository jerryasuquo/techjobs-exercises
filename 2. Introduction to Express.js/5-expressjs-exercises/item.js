class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Item.id;
    Item.list.push(this);
    Item.id++;
  }
  static update(id, data) {
    let foundItem = Item.list.find((val) => val.id === id);
    foundItem.name = data.name;
    foundItem.price = data.price;
    return foundItem;
  }
  static find(id) {
    return Item.list.find((val) => val.id === id);
  }
  static remove(id) {
    let foundIndex = Item.list.findIndex((val) => val.id === id);
    Item.list.splice(foundIndex, 1);
  }
}

Item.id = 1;
Item.list = [];

module.exports = Item;
