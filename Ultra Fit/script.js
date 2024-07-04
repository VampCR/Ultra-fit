let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.style.transform = "translateY(-100%)"; // Hide navbar
        navbar.classList.remove("scroll-up");
    } else {
        // Upscroll
        if(scrollTop <= 0){
            navbar.classList.remove("scroll-up");
            navbar.style.backgroundcolor = "transparent";
        }else{
            navbar.style.transform = "translateY(0)"; // Show navbar
            navbar.classList.add("scroll-up");
        }
    }
    lastScrollTop = scrollTop;
});
