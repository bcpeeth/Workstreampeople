function triple(x) {
  return x * 3
}

console.log(triple(7))

// -------------------------------------------------------------------------------------------------------------------------

var triple = function(x) {
  return x * 3
}

var waffle = triple

console.log(waffle(30))

// Functions are values. Just like strings or numbers, functions can be assigned to variables or passed into other functions: higher-order functions.
// But what are higher-order functions good for? Compositions! The fact that we can take one function and put it into another function, allows us to compose a lot of small functions into bigger functions.
// Let's look at the high-order function 'filter'
// 'Filter' is a function on the array that accepts another function as its argument, which it will use to return a new filtered version of the array.

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

// We want to filter out the dogs. Before we use 'filter', let's try to do it using a normal loop.

// var dogs = []
// for (var i=0; i < animals.length; i++) {
//   if (animals[i].species === 'dog')
//   dogs.push(animals[i])
// }

// console.log(dogs)

// Let's now rewrite this using 'filter'. 'Filter' is the method on the array object that takes another function as its argument, and uses that function to filter the array.

var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})

console.log(dogs)

// The reason that we need less logic is that when we write our software in small simple functions, they compose together, which allows us to re-use these functions all over.
// The 'callback' function and the 'filter' function just slopped into each other. They are 'composable'.
// Let's break out the 'callback' into a separate variable.

var isDog = function(animal) {
  return animal.species === 'dog'
}

var noDogs = function(animal) {
  return animal.species !== 'dog'
}

var dogs = animals.filter(isDog)

// Notice that 'isDog' is just a function that checks if an object is a dog.

var otherAnimals = animals.filter(noDogs)

console.log(otherAnimals)
