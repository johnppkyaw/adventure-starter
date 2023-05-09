class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

//testing
let item = new Item("rock", "just a simple rock");
let item2 = new Item("paper", 'just a smiple paper');
let inventory = [];
inventory.push(item);
inventory.push(item2);
console.log(inventory);
console.log(inventory[1].name);
let retrieveItem = 'rock';
let index;
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].name === retrieveItem) {
    index = i;
  }
}
console.log(index);
//


module.exports.Item = Item;
