const storageItems = JSON.parse(localStorage.getItem("products"));
const showArea = document.getElementsByClassName("product-list")[0];
const 
if (localStorage.getItem("products")) {
  showArea.innerHTML = "";
  html = "";
  for (let i = 0; i < storageItems.length; i++) {
    showArea.innerHTML += `
<div class="product product-${storageItems[i].productName}">
<div class="product-info">
  <div class="product-img">
  <img height="64px" width="64px" src="/src/assets/cart/${getPhotoUrl(
    storageItems[i].productName
  )}"  >
  </div>
  <div class="product-name-and-price">
    <div class="product-name">${
      storageItems[i].productName.includes("_")
        ? storageItems[i].productName.replace(/_/g, " ")
        : storageItems[i].productName
    }</div>
    <div class="product-price price-${storageItems[i].productName}">$ ${
      storageItems[i].price
    }</div> 
  </div>
</div>
<div class="selected-amount">
<p>x${storageItems[i].quantity}</p>
</div>
</div> `;
  }
}

const total_p = document.getElementsByClassName("price-TOTAL")[0];
const vat_p = document.getElementsByClassName("price-VAT")[0];
const grand_p = document.getElementsByClassName("price-GRAND")[0];
let products_num = 0;
let products_price = 0;
storageItems?.forEach((info) => {
  products_num += +info.quantity;
  products_price += +info.price.replace(",", "") * +info.quantity;
});
total_p.innerHTML = `$ ${products_price.toLocaleString()}`;
vat_p.innerHTML = `$ ${Math.round(products_price * 0.2).toLocaleString()}`;
grand_p.innerHTML = `$ ${(products_price + 50).toLocaleString()}`
/* 
  const parsedInfo = JSON.parse(localStorage.getItem("products"));
  parsedInfo?.forEach((info) => {
    product_num += +info.quantity;
    product_price += +info.price.replace(",", "") * +info.quantity;
  });

  price_in_overall.innerHTML = `$ ${product_price.toLocaleString()}`;
  amount_in_overall.innerHTML = `Cart (${product_num})`;
*/
