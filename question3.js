
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something",
   introduce: function(){console.log(`My name is ${this.name} and my color is ${this.color} and my type is ${this.type}`)}
}

console.log(monster.name)
monster['type'] = "creature"
monster['age'] = 6
console.log("type: ", monster.type)
console.log("age: ", monster.age)
monster.introduce()


