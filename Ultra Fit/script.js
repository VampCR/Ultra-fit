let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Downscroll
    navbar.style.transform = "translateY(-100%)"; // Hide navbar
    navbar.classList.remove("scroll-up");
  } else {
    // Upscroll
    if (scrollTop <= 0) {
      navbar.classList.remove("scroll-up");
      navbar.style.backgroundcolor = "transparent";
    } else {
      navbar.style.transform = "translateY(0)"; // Show navbar
      navbar.classList.add("scroll-up");
    }
  }
  lastScrollTop = scrollTop;
});

// login form---------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");
  const loginClose = document.getElementById("loginClose");
  const signupClose = document.getElementById("signupClose");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const signupLink = document.getElementById("signupLink");

  loginBtn.addEventListener("click", function () {
    loginModal.style.display = "block";
    clearForm(loginForm);
  });

  loginClose.addEventListener("click", function () {
    loginModal.style.display = "none";
    clearForm(loginForm);
  });

  signupClose.addEventListener("click", function () {
    signupModal.style.display = "none";
    clearForm(signupForm);
  });

  window.addEventListener("click", function (event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
      clearForm(loginForm);
    } else if (event.target == signupModal) {
      signupModal.style.display = "none";
      clearForm(signupForm);
    }
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in both username and password.");
    } else {
      alert("Login successful");
      loginModal.style.display = "none";
      clearForm(loginForm);
    }
  });

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginModal.style.display = "none";
    signupModal.style.display = "block";
    clearForm(signupForm);
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value.trim();
    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document
      .getElementById("signupConfirmPassword")
      .value.trim();

    if (!email || !username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert("Sign up successful");
      signupModal.style.display = "none";
      clearForm(signupForm);
    }
  });

  function clearForm(form) {
    form.reset();
  }
});

// pro and cart---------------------------------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart() {
  const productName = document.querySelector(".product-name").innerText;
  const productPrice = parseFloat(
    document.querySelector(".product-price").innerText.replace("$", "")
  );
  const productQuantity = parseInt(document.getElementById("quantity").value);
  const productImage = document.querySelector(".product-image img").src;

  const product = {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    image: productImage,
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalAmountContainer = document.getElementById("total-amount");
  let totalAmount = 0;

  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
            <img src="${item.image}" alt="Product Image">
            <div>
                <p>${item.name}</p>
                <p>$${item.price}</p>
                <div class="update-quantity">
                    <label for="quantity-${index}">Quantity:</label>
                    <input type="number" id="quantity-${index}" name="quantity" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
                </div>
            </div>
            <div class="button-c">
                <button class="remove-btn" onclick="removeFromCart(${index})"><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
            </div> 
            
        `;

    totalAmount += item.price * item.quantity;
    cartItemsContainer.appendChild(cartItem);
  });

  totalAmountContainer.innerText = totalAmount.toFixed(2);
}

function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
