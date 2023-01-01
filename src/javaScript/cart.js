const cart_icon = document.getElementById("cart");
const product_list = document.getElementsByClassName("products")[0];
const main = document.querySelector("main");
const checkout_btn = document.getElementsByClassName("checkout")[0];
const main_div = document.getElementById("overlay");
const mini_increase = document.getElementById("mini-plus");
const mini_decrease = document.getElementById("mini-minus");
const mini_result = document.getElementById("product_amount");
const product_submit = document.getElementsByClassName("submit-button")[0];
const back_to_home = document.getElementsByClassName("back-to-home")[0];
const thank_you_note = document.getElementsByClassName("thank_you_note")[0];

cart_icon?.addEventListener("click", () => {
  turned_on();
  let product_num = 0;
  let product_price = 0;
  const information_about_products = localStorage.getItem("products");
  const parsedInfo = JSON.parse(information_about_products);
  parsedInfo?.forEach((info) => {
    product_num += +info.quantity;
    product_price += +info.price.replace(",", "") * +info.quantity;
  });

  document.getElementsByClassName(
    "total_price"
  )[0].innerHTML = `$ ${product_price.toLocaleString()}`;
  document.getElementsByClassName(
    "all_quantity"
  )[0].innerHTML = `Cart (${product_num})`;
  renderProducts();
});

product_submit?.addEventListener("click", () => {
  submit_turned_on();
  product_list.style.display = "none";
  localStorage.clear();
  products_list.innerHTML = "";
  total_products.innerHTML = "Cart (0)";
  total_pasi.innerHTML = "$ 0";
});

main_div.addEventListener("click", () => {
  turned_off();
  submit_turned_off();
});

[product_list, thank_you_note].forEach((x) => {
  x?.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

function turned_on() {
  main_div.style.display = "block";
  product_list.style.display = "block";
  main_div.style.cursor = "default";
  document.body.style.overflow = "hidden";
}

function turned_off() {
  main_div.style.display = "none";
  document.body.style.overflow = "visible";
}

function submit_turned_on() {
  main_div.style.display = "block";
  thank_you_note.style.display = "block";
  main_div.style.cursor = "default";
  document.body.style.overflow = "hidden";
}

function submit_turned_off() {
  main_div.style.display = "none";
  thank_you_note.style.display = "none";
  document.body.style.overflow = "visible";
}

//--------------------------------------------

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
