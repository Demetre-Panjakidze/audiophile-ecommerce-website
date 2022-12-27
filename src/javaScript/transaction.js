const increase = document.getElementById("plus");
const decrease = document.getElementById("minus");
const result = document.getElementById("amount");

increase.addEventListener("click", () => {
  +result.innerHTML++;
});
decrease.addEventListener("click", () => {
  if (+result.innerHTML >= 2) {
    +result.innerHTML--;
  }
});

const cart_continue = document.getElementById("cart-add");
