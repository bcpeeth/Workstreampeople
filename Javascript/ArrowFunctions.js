// Arrow functions are basisally a shorter function syntax, where the "this" keyword behaves differently.
// With arrow functions we can make functions that are small, inline and single-purpose.

const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'attack', value: 23, target: 'player-fluffykins' },
    { type: 'attack', value: 12, target: 'player-dorkman' },
]

// const totalDamageOnDorkman = dragonEvents
//     .filter(function(event) {
//         return event.type === 'attack'
//     })
//     .filter(function(event) {
//         return event.target ==='player-dorkman'
//     })
//     .map(function(event) {
//         return event.value
//     })
//     .reduce(function(prev, value) {
//         return (prev || 0) + value
//     })

// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)

// A lot of the above code is just boilerplate code, which can be trimmed down for better syntax reading.

// -------------------------------------------------------------------------------

// Before arrow functions, we could optimize into something like:
// const totalDamageOnDorkman = dragonEvents
//     .filter(function(event) {
//       return event.type === 'attack' &&
//              event.target ==='player-dorkman'
//     })
//     // but this would make the above piece of code not reusable

//     .map(function(event) {
//         return event.value
//     })
//     .reduce(function(prev, value) {
//         return (prev || 0) + value
//     })

// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)

// -------------------------------------------------------------------------------

// Let's now refactor this using arrow functions
// const totalDamageOnDorkman = dragonEvents
//     .filter((event) => {
//         return event.type === 'attack'
//     })
//     .filter((event) => {
//         return event.target ==='player-dorkman'
//     })
//     .map((event) => {
//         return event.value
//     })
//     .reduce((prev, value) => {
//         return (prev || 0) + value
//     })

// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)

// -------------------------------------------------------------------------------

// If our code is one statement like "return event.type === 'attack'", we can make it return that statement implicitly.

// const totalDamageOnDorkman = dragonEvents
//     .filter(event => event.type === 'attack')
//     .filter(event => event.target ==='player-dorkman')
//     .map(event => event.value)
//     .reduce((prev, value) => (prev || 0) + value)

// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)

// -------------------------------------------------------------------------------

// Since we know that our piece of code is about 'dragonEvents', we can optimize even further by replacing the word 'event, and replacing the function 'reduce':
const reduceTotal = (prev, x) => (prev || 0) + x
const totalDamageOnDorkman = dragonEvents
    .filter(e => e.type === 'attack')
    .filter(e => e.target ==='player-dorkman')
    .map(e => e.value)
    .reduce(reduceTotal)

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)