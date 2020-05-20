// Arrow functions are basisally a shorter function syntax, where the "this" keyword behaves differently.
// With arrow functions we can make functions that are small, inline and single-purpose.

const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'attacke', value: 23, target: 'player-fluffykins' },
    { type: 'attack', value: 12, target: 'player-dorkman' },
]

const totalDamageOnDorkman = dragonEvents
    .filter(function(event) {
        return event.type === 'attack'
    })
    .filter(function(event) {
        return event.target ==='player-dorkman'
    })
    .map(function(event) {
        return event.value
    })
    .reduce(function(prev, value) {
        return (prev || 0) + value
    })

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)

// A lot of the above code is just boilerplate code, which can be trimmed down for better syntax.