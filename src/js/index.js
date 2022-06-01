//mobile menu
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const closeBtnsRef = document.querySelectorAll("[data-menu-close]");

  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open")
  }

  for (const btn of closeBtnsRef) {
    btn.addEventListener("click", toggleMenu);
  }
    
  menuBtnRef.addEventListener("click", toggleMenu);

  //review slides
  $('.review__list').slick({
    dots: true,
    arrows: false
  });
})();