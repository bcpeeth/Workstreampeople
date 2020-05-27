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


// Now using 'map':

var names = animals.map(function(animal) {
   
})
console.log(names)
