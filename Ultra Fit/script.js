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
