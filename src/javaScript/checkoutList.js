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
<div class="selected-amount">
<p>x${storageItems[i].quantity}</p>
</div>
</div> `;
  }
}

