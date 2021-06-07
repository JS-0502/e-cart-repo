function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }
  function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  }
  (function () {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  })();
  
  const addItems = document.querySelector(".hello");
  const addToCartBtn = document.querySelector(".add-to-cart");
  let qty = document.querySelector("#cart-item3");
  const cartItems = document.querySelectorAll(".grid-container-2 div");
  let price = document.querySelector("#cart-item6");
  let add = document.querySelector(".cart-item4 button");
  let minus = document.querySelector(".cart-item5 button");
  let checkout = document.querySelector(".checkout");
  let deleteItem = document.querySelector(".deleteBtn");
  const total = document.querySelector(".total");
  let addItem2 = document.querySelector(".add-to-cart2");
  let addItem3 = document.querySelector(".add-to-cart3");
  let addCart = document.querySelector(".grid-container-2");
  let list = document.querySelector(".list");
  const slider = document.querySelector(".slider1");
  const border = document.querySelector("#border");
  const cart = document.querySelector(".cart");
  
  const checkout1 = document.querySelector("#checkout-btn");
  
  function Cart1() {
    addToCartBtn.addEventListener("click", function () {
      this.classList.remove("add-to-cart");
      this.classList.add("added");
      this.textContent = "Added";
  
      qty.textContent = 1;
      price.textContent = 100;
  
      function minus1() {
        minus.addEventListener("click", function () {
          let newQty = parseFloat(qty.textContent);
          newQty = qty.textContent--;
          let newPrice = parseFloat(price.textContent);
          newPrice = price.textContent -= 100;
          total.textContent = newPrice - parseFloat(total.textContent);
        });
      }
      function add1(newPrice) {
        add.addEventListener("click", function () {
          qty.textContent++;
          let newPrice = parseFloat(price.textContent);
          newPrice += 100;
          price.textContent = newPrice;
          total.textContent =
            parseFloat(price.textContent) + parseFloat(total.textContent);
        });
      }
      total.textContent = price.textContent + parseFloat(total.textContent);
      add1();
      minus1();
    });
  }
  
  Cart1();
  
  addItem2.addEventListener("click", function () {
    this.classList.remove("add-to-cart");
    this.classList.add("added");
    this.textContent = "Added";
    const container = document.createElement("div");
    const item1 = document.createElement("div");
    const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    const item4 = document.createElement("button");
    const item5 = document.createElement("button");
    const item6 = document.createElement("div");
    const item7 = document.createElement("button");
  
    container.appendChild(item1);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
    container.appendChild(item5);
    container.appendChild(item6);
    container.appendChild(item7);
  
    cart.appendChild(container);
  
    item1.textContent = "#2";
    item2.textContent = "Air Max";
    item3.textContent = 1;
    item4.textContent = "+";
    item5.textContent = "-";
    item6.textContent = 120;
    item7.textContent = "Delete";
  
    container.classList.add("grid-container-2");
    item1.classList.add("cart-item1");
    item2.classList.add("cart-item2");
    item3.classList.add("cart-item3");
    item4.classList.add("cart-item4", "btn-chng");
    item5.classList.add("cart-item5", "btn-chng");
    item6.classList.add("cart-item6");
    item7.classList.add("cart-item7", "deleteBtn");
  
    this.inner = item5.addEventListener("click", function () {
      let newQty2 = parseFloat(item3.textContent);
      newQty2 = item3.textContent--;
      let newPrice2 = parseFloat(item6.textContent);
      newPrice2 = item6.textContent -= 120;
      total.textContent = newPrice2 - parseFloat(total.textContent);
    });
    this.inner = item4.addEventListener("click", function () {
      let newQty2 = parseFloat(item3.textContent);
      item3.textContent++;
  
      let newPrice2 = parseFloat(item6.textContent);
      newPrice2 += 120;
      item6.textContent = newPrice2;
      total.textContent = newPrice2 + parseFloat(total.textContent);
    });
  
    this.inner = item7.addEventListener("click", function () {
      const del = this.parentElement;
      del.parentNode.removeChild(del);
      addItem2.removeAttribute("onclick");
      addItem2.classList.add("add-to-cart");
      addItem2.classList.remove("added");
      addItem2.textContent = "Add to cart";
      total.textContent =
        parseFloat(total.textContent) - parseFloat(item6.textContent);
      addItem2.addEventListener("click", function () {
        item1.textContent = "#2";
        item2.textContent = "Air Max";
        item3.textContent = 1;
        item4.textContent = "+";
        item5.textContent = "-";
        item6.textContent = 120;
        item7.textContent = "Delete";
      });
    });
    total.textContent =
      parseFloat(item6.textContent) + parseFloat(total.textContent);
  });
  
  addItem3.addEventListener("click", function () {
    this.classList.remove("add-to-cart");
    this.classList.add("added");
    this.textContent = "Added";
    const container = document.createElement("div");
    const item1 = document.createElement("div");
    const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    const item4 = document.createElement("button");
    const item5 = document.createElement("button");
    const item6 = document.createElement("div");
    const item7 = document.createElement("button");
  
    container.appendChild(item1);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
    container.appendChild(item5);
    container.appendChild(item6);
    container.appendChild(item7);
  
    cart.appendChild(container);
  
    item1.textContent = "#3";
    item2.textContent = "Yeezy boost";
    item3.textContent = 1;
    item4.textContent = "+";
    item5.textContent = "-";
    item6.textContent = 150;
    item7.textContent = "Delete";
  
    container.classList.add("grid-container-2");
    item1.classList.add("cart-item1");
    item2.classList.add("cart-item2");
    item3.classList.add("cart-item3");
    item4.classList.add("btn-chng");
    item5.classList.add("btn-chng");
    item6.classList.add("cart-item6");
    item7.classList.add("cart-item7", "deleteBtn");
  
    this.inner1 = item5.addEventListener("click", function () {
      let newQty2 = parseFloat(item3.textContent);
      newQty2 = item3.textContent--;
      let newPrice2 = parseFloat(item6.textContent);
      newPrice2 = item6.textContent -= 150;
      total.textContent = newPrice2 - parseFloat(total.textContent);
    });
  
    this.inner2 = item4.addEventListener("click", function () {
      let newQty3 = parseFloat(item3.textContent);
      newQty3 = item3.textContent++;
  
      var newPrice3 = parseFloat(item6.textContent);
      newPrice3 += 150;
      item6.textContent = newPrice3;
      total.textContent = newPrice3 + parseFloat(total.textContent);
    });
  
    this.inner = item7.addEventListener("click", function () {
      const del = this.parentElement;
      del.parentNode.removeChild(del);
  
      addItem3.classList.add("add-to-cart");
      addItem3.classList.remove("added");
      addItem3.textContent = "Add to cart";
      total.textContent =
        parseFloat(total.textContent) - parseFloat(item6.textContent);
      addItem3.addEventListener("click", function () {
        item1.textContent = "#3";
        item2.textContent = "Yeezy boost";
        item3.textContent = 1;
        item4.textContent = "+";
        item5.textContent = "-";
        item6.textContent = 150;
        item7.textContent = "Delete";
      });
    });
    total.textContent =
      parseFloat(item6.textContent) + parseFloat(total.textContent);
  });
  
  checkout1.addEventListener("click", function () {
    alert("Your total is $" + total.textContent);
  });
  
  list.classList.add("grid-container-2");
  checkout.classList.add("cart-item7");
  addItem2.classList.add("add-to-cart");
  addItem3.classList.add("add-to-cart");
  slider.classList.add("grid-container-2");
  border.classList.add("grid-container-2");
  