const cart_icon = document.getElementById("cart");
const product_list = document.getElementsByClassName("products")[0];
const main = document.querySelector("main");
const checkout_btn = document.getElementsByClassName("checkout")[0];

cart_icon.addEventListener("click", () => {
  if (product_list.style.display === "block") {
    product_list.style.display = "none";
    main.style.filter = "brightness(100%)";
    document.body.style.overflow = 'visible';
  } else {
    product_list.style.display = "block";
    main.style.filter = "brightness(50%)";
    product_list.style.filter = "brightness(100%)";
    document.body.style.overflow = 'hidden';
  }
});

function renderProducts() {
  if (localStorage.getItem("products")) {
    const products = JSON.parse(localStorage.getItem("products"));

    html = "";
    for (let i = 0; i < products.length; i++) {
      html += `
<div class="product">
  <div class="product-info">
    <div class="product-img">
    </div>
    <div class="product-name-and-price">
      <div class="product-name">${
        products[i].productName.includes("_")
          ? products[i].productName.replace(/_/g, " ")
          : products[i].productName
      }</div>
      <div class="product-price">$ ${products[i].price}</div> 
    </div>
  </div>
  <div class="mini-increase-decrease">
    <button id="mini-minus">-</button>
    <p id="product-amount">${products[i].quantity}</p>
    <button id="mini-plus">+</button>
  </div>
</div> `;
    }
    document
      .getElementsByClassName("item-list")[0]
      .insertAdjacentHTML("beforeend", html);
  }
}

renderProducts();
