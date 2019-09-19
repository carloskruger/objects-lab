const ogre = {
    name: "The Ogre",
    introduce: function(){console.log(`My name is ${this.name} `)},
    hitpoints: 1000,
    attack: function(){adventurer['hitpoints'] = adventurer['hitpoints'] - Math.floor( Math.random() * 100);
    if (adventurer['hitpoints'] < 0) adventurer['hitpoints'] = 0}
 }
 
 const adventurer = {
    name: "Indiana Jones",
    introduce: function(){console.log(`My name is ${this.name}`)},
    hitpoints: 800,
    attack: function(){ogre['hitpoints'] = ogre['hitpoints'] - 30;
       if (ogre['hitpoints'] < 0) ogre['hitpoints'] = 0}
 }

 while (ogre['hitpoints'] > 0 && adventurer['hitpoints'] > 0){
    console.log("The adventurer attacks!!!!")
    adventurer.attack()
    console.log("The ogre's hitpoints are: ", ogre['hitpoints'])
    console.log("The ogre attacks!!!!")
    ogre.attack()
    console.log("The adventurer's hitpoints are: ", adventurer['hitpoints'])

 }
 if (ogre['hitpoints'] > 0)
    console.log("The ogre wins!!!!")

if (adventurer['hitpoints'] > 0)
    console.log("The adventurer wins!!!!")
 
 
 