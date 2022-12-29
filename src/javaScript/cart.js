const cart_icon = document.getElementById("cart");
const product_list = document.getElementsByClassName("products")[0];
const main = document.querySelector("main");
const checkout_btn = document.getElementsByClassName("checkout")[0];

cart_icon?.addEventListener("click", () => {
  on();
  let product_num = 0;
  let product_price = 0;
  const information_about_products = localStorage.getItem("products");
  const parsedInfo = JSON.parse(information_about_products);
  console.log(parsedInfo);
  parsedInfo.forEach((info) => {
    product_num += +info.quantity;
    product_price += +info.price.replace(",", ".") * +info.quantity;
  });

  document.getElementsByClassName(
    "total_price"
  )[0].innerHTML = `$ ${product_price}`;
  document.getElementsByClassName(
    "all_quantity"
  )[0].innerHTML = `Cart (${product_num})`;
  renderProducts();
});

document.getElementById("overlay")?.addEventListener("click", () => {
  off();
});

document
  .getElementsByClassName("products")[0]
  ?.addEventListener("click", (e) => {
    e.stopPropagation();
  });

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function renderProducts() {
  if (localStorage.getItem("products")) {
    const products = JSON.parse(localStorage.getItem("products"));
    const container = document.getElementsByClassName("item-list")[0];
    container.innerHTML = "";
    html = "";
    for (let i = 0; i < products.length; i++) {
      html += `
<div class="product">
  <div class="product-info">
    <div class="product-img">
    <img height="64px" width="64px" src="/src/assets/cart/${getPhotoUrl(
      products[i].productName
    )}"  >
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

    container.insertAdjacentHTML("beforeend", html);
  }
}

function getPhotoUrl(productName) {
  const productFirstName = productName.split("_")[0].toLowerCase();

  let productPhoto;
  if (productFirstName === "xx59") {
    productPhoto = `image-${productFirstName}-headphones.jpg`;
  } else if (productFirstName === "xx99") {
    if (productName === "XX99_MK_I") {
      productPhoto = `image-${productFirstName}-mark-one-headphones.jpg`;
    } else {
      productPhoto = `image-${productFirstName}-mark-two-headphones.jpg`;
    }
  } else if (productFirstName === "yx1") {
    productPhoto = `image-${productFirstName}-earphones.jpg`;
  } else if (productFirstName === "zx7" || productFirstName === "zx9") {
    productPhoto = `image-${productFirstName}-speaker.jpg`;
  }

  return productPhoto;
}
