const small = document.querySelector("#small")
const medium = document.querySelector("#medium")
const big = document.querySelector("#big")

const bubbling = (e) => {
  e.stopImmediatePropagation();
  console.log(e.currentTarget.id)
}

small.addEventListener("click", bubbling)
medium.addEventListener("click", bubbling)
big.addEventListener("click", bubbling)