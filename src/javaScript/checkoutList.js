if (localStorage.getItem("products")) {
  const storageItems = JSON.parse(localStorage.getItem("products"));
  const showArea = document.getElementsByClassName("product-list")[0];
  console.log(storageItems);
  console.log(showArea);
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

</div> `;
  }
}


/* 
if (localStorage.getItem("products")) {
    const products = JSON.parse(localStorage.getItem("products"));
    const container = document.getElementsByClassName("item-list")[0];
    container.innerHTML = "";
    html = "";
    for (let i = 0; i < products.length; i++) {
      html += `
<div class="product product-${products[i].productName}">
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
      <div class="product-price price-${products[i].productName}">$ ${
        products[i].price
      }</div> 
    </div>
  </div>
  <div class="mini-increase-decrease">
    <button id="mini-minus" class="minus-${products[i].productName}">-</button>
    <p id="product-amount" class="amount-${products[i].productName}">${
        products[i].quantity
      }</p>
    <button id="mini-plus" class="plus-${products[i].productName}">+</button>
  </div>
</div> `;
    }
    container.insertAdjacentHTML("beforeend", html);
  }

*/