// const fetchLib = {
//   getData() {
//     return new Promise((res, rej) => {
//       const data = "json"
//       data ? res("data") : rej("no data")
//     })
//   }
// }
//
// const getData = fetchLib.getData()
// getData.then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

// const getData = async () => {
//   try {
//     const googleData = await fetch("https://www.google.com/")
//     const bingData = await fetch("https://www.bing.com/")
//     const yahooData = await fetch("https://www.yahoo.com/")
//     return [googleData.url, bingData.url, yahooData.url]
//   } catch (err) {
//     console.log(err)
//   }
// }
//
// getData().then(data => {
//   console.log(data)
// })


// all | race | any | allSettled

const pr1 = fetch("https://www.google.com/")
const pr2 = fetch("https://www.bing.com/")
const pr3 = fetch("https://www.yahoo.com/")

// Ждет все
// Promise.all([pr1, pr2, pr3]).then(data => {
//   console.log(data)
// }).catch(console.log)

// Ждет первый
// Promise.race([pr1, pr2, pr3]).then(data => {
//   console.log(data.url)
// }).catch(console.log)

// Ждет любой резолв, если все реджект то кэтч
// Promise.any([pr1, pr2, pr3]).then(data => {
//   console.log(data.url)
// }).catch(console.log)

// Возвращает все со статусом, без кэтча
Promise.allSettled([pr1, pr2, pr3]).then(data => {
  console.log(data)
})