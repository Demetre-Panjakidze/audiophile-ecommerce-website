const remove = document.getElementById("remove-all");
const products_list = document.getElementsByClassName("item-list")[0];
const cart_add = document.getElementById("cart-add");
const total_price = document.getElementsByClassName("price");
const total_amount = document.getElementsByClassName("items-in-cart");

remove.addEventListener("click", () => {
  localStorage.clear();
  products_list.innerHTML = "";
});

const information_about_products = localStorage.getItem("products");
const parsedInfo = JSON.parse(information_about_products);
let product_num = 0;
let product_price = 0;

cart_add.addEventListener("click", () => {
  parsedInfo.forEach((info) => {
    product_num += +info.quantity;
    product_price += +info.price * +info.quantity;
  });

  total_price.innerHTML = `$ ${product_price}`;
  total_amount.innerHTML = `cart (${product_num})`;
});
