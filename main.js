// const store = {
//   _subscribers: [],
//   dispatch(action) {
//     // store changed
//     this._subscribers.forEach(rerender => rerender(action))
//   }, subscribe(subscriber) {
//     this._subscribers.push(subscriber)
//   }
// }
//
//
// store.subscribe(subscriber()) // стор изменился
// Promise.then(subscriber()) // промис зарезолвился
// setTimeout(subscriber(), 1000) // прошла секунда
// button.addEventListener("click", subscriber()) // клик по кнопке

// subscriber == observer == listener == watcher == handler


// const button = {
//   _subscribers: {
//     "click": [],
//     "doubleClick": [],
//     "onFocus": []
//   },
//   click() {
//     this._subscribers["click"].forEach(subscriber => subscriber())
//   },
//   doubleClick() {
//     this._subscribers["doubleClick"].forEach(subscriber => subscriber())
//   },
//   onFocus() {
//     this._subscribers["onFocus"].forEach(subscriber => subscriber())
//   },
//   addEventListener(eventName, subscriber) {
//     this._subscribers[eventName].push(subscriber)
//   },
//   removeEventListener(eventName, subscriber) {
//     this._subscribers[eventName] = this._subscribers[eventName].filter(s => s !== subscriber)
//   }
// }
//
// const show = () => console.log("event show")
// const hide = () => console.log("event hide")
//
// button.addEventListener("click", show)
// button.addEventListener("click", hide)
//
// button.click()
//
// button.removeEventListener("click", hide)
//
// button.click()

const arr = [1, 2, 3, 4, 5]

const reversedArr = arr.toReversed()

console.log(arr, reversedArr)