// Just like 'filter', 'map' is another higher-order function. It goes throught an array, but unlike 'filter', it doesn't throw objects away. Instead it transforms them.

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//   We want to get an array of all the names of all the animals. Before we use 'map', let's try to do it using a normal loop.

// var names = []
// for (var i=0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

// 'Filter' expects its callback function to return a true or false value that determines wether or not the item should be included in the array.
// 'Map' will include all items in the array, but instead, it expects the callback function to return a transformed object that it will put into the new array, instead of the original 'animal', whcih in this case will be the name.

// var names = animals.map(function(animal) {
//    return animal.name
// })

// Since 'map' just expects the callback to return any object, we can use it to create completely new objects.

// var names = animals.map(function(animal) {
//   return animal.name + 'is a ' + animal.species
// })

// We can further optimize the code above by using 'arrow functions'.

// var names = animals.map((animal) => {
//   return animal.name + 'is a ' + animal.species
// })

// var names = animals.map((animal) => animal.name)

var names = animals.map((x) => x.name)

console.log(names)
