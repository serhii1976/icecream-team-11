//mobile menu
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
    
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });

  //review slides
  $('.review__list').slick({
    dots: true,
    arrows: false
  });
})();

//When the menu is open, fixes the body. 
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuBody = document.querySelector("[body-menu]");
    
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuBody.classList.toggle("is-assign");
  });
})();