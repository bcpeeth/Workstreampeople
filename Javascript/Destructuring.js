var animal = {
    species: 'dog',
    weight: 23,
    sound: 'woof',
}

var { species, sound } = animal
console.log('The ' + species + ' says ' + sound + '!')

//  Destructuring is used to make it easier to deal with option objects.
//Option objects are objects that you pass to a function which is a single object that might or might not contain several properties.

makeSound ({
    species: 'dog',
    weight: 23,
    sound: 'woof',
})

function makeSound(options) {
    console.log('The ' + options.species + ' says ' + options.sound + '!')
}