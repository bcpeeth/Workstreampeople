const fetch = require('node-fetch')

// function fetchAvatarUrl(userId) {
//     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     .then(response => response.json())
//     .then(data => data.imageUrl)
// }

// const result = fetchAvatarUrl(123)
// result

// ----------------------------------------------------------------
// Let's rewrite the above code using async/await
// Definition of async/await function:
// Inside a function marked as 'async', you are allowed to place the 'await' keyword in front of an expression that returns a promise. When you do, the execution of the async function is paused until de promise is resolved.

// async function fetchAvatarUrl(userId) {

//     const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     const data = await response.json()
//     data
//     return data.imageUrl
// }

// const result = fetchAvatarUrl(123)
// result

// ----------------------------------------------------------------
// ----------------------------------------------------------------

// Now for a more complex example

// function fetchCatAvatars(userId) {
//     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//         .then(response => response.json())
//         .then(user => {
//             const promises = user.cats.map(catId =>
//                 fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//                     .then(response => response.json())
//                     .then(catData => catData.imageUrl)
//             )
//             return Promise.all(promises)
//         })
// }

// const result = fetchCatAvatars(123)
// result

// ----------------------------------------------------------------
// And using async/await:

// async function fetchCatAvatars(userId) {
//   const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//   const user = await response.json()
//   const catImageUrls = []
//   for (const catId of user.cats) {
//     const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//     const catData = await response.json()
//     catImageUrls.push(catData.imageUrl)
//   }
//   return catImageUrls

//   // return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//   //   .then(response => response.json())
//   //   .then(user => {
//   //       const promises = user.cats.map(catId =>
//   //           fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//   //               .then(response => response.json())
//   //               .then(catData => catData.imageUrl)
//   //       )
//   //       return Promise.all(promises)
//   //   })
// }

// const result = fetchCatAvatars(123)
// result

// ----------------------------------------------------------------

async function fetchCatAvatars(userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const user = await response.json()

  return await Promise.all(user.cats.map(async function(catId) {
    const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
    const catData = await response.json()
    catData
    return catData.imageUrl
  }))
}

const result = fetchCatAvatars(123)
result

// ----------------------------------------------------------------

// async function party() {
//   return 'poop'
// }

// const result = party()
// result

// // An async function will always return a promise


