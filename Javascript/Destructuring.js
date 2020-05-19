var animal = {
    species: 'dog',
    weight: 23,
    sound: 'woof',
}

var { species, sound } = animal
console.log('The ' + species + ' says ' + sound + '!')

//  Destructuring is used to make it easier to deal with option objects.
// Option objects are objects that you pass to a function which is a single object that might or might not contain several properties.

makeSound ({
    species: 'dog',
    weight: 23,
    sound: 'woof',
})

function makeSound(options) {
    console.log('The ' + options.species + ' says ' + options.sound + '!')
}

// It turns a more complicated when we make 'species' an optional property on the object's object.


makeSound ({
    weight: 23,
    sound: 'woof',
})

function makeSound(options) {
    options.species = options.species || 'animal'
    console.log('The ' + options.species + ' says ' + options.sound + '!')
}

// The method above becomes cluttered, with code being repeated too much. This can be solved without destructuring by declaring variables at the top of the function.

makeSound ({
    weight: 23,
    sound: 'woof',
})

function makeSound(options) {
    // var species = options.species || 'animal'
    // var sound = options.sound
    var { species, sound } = options
    species = species || 'animal'
    console.log('The ' + species + ' says ' + sound + '!')
}

// To optimize even more, we can do destructuring in te method signature and assign default values in it.

makeSound ({
    weight: 23,
    sound: 'woof',
})

function makeSound({ species = 'animal', sound }) {
    console.log('The ' + species + ' says ' + sound + '!')
}