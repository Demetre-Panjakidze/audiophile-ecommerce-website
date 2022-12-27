const cart_icon = document.getElementById("cart");
const product_list = document.getElementsByClassName("products")[0];
const main = document.querySelector('main');
const checkout_btn = document.getElementsByClassName("checkout")[0];

cart_icon.addEventListener("click", () => {
  if (product_list.style.display === "block") {
    product_list.style.display = "none";
    document.body.style.overflow = "visible";
    // main.style.background = "#FFF";
  } else {
    product_list.style.display = "block";
    document.body.style.overflow = 'hidden';
    // main.style.backgroundColor = "#FAFAFA";
  }
});

localStorage.setItem("earphone", 0);
localStorage.setItem("xx59-headphone", 0);
localStorage.setItem("xx99-mark-one-headphone", 0);
localStorage.setItem("xx99-mark-two-headphone", 0);
localStorage.setItem("zx7-speaker", 0);
localStorage.setItem("zx9-speaker", 0);

