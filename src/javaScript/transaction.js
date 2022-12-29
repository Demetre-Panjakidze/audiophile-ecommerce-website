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

cart_continue.addEventListener("click", (e) => {
  const productName = e.target.className;
  const productFirstName = productName.split("_")[0].toLowerCase();
  /*
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
  */
  const quantity = result.innerHTML;
  const pricing = document.getElementsByClassName("pricing")[0];
  const price = pricing.childNodes[1].innerHTML.split(" ")[1];

  if (localStorage.getItem("products")) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const speciFicProduct = products.find(
      (product) => product.productName === productName
    );

    if (speciFicProduct) {
      speciFicProduct.quantity = quantity;
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      products.push({ productName, quantity, price});
      localStorage.setItem("products", JSON.stringify(products));
    }
  } else {
    localStorage.setItem(
      "products",
      JSON.stringify([{ productName, quantity, price,}])
    );
  }
});
