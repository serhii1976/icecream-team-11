//modal menu header
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

//modal header
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-header]"),
    closeModalBtn: document.querySelector("[data-modal-close-header]"),
    modal: document.querySelector("[data-modal-header]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtns: document.querySelectorAll("[data-modal-close]"),
  };

  for (const btn of refs.openModalBtns) {
    btn.addEventListener("click", () => toggleModal(btn.dataset.modalOpen))
  }

  for (const btn of refs.closeModalBtns) {
    btn.addEventListener("click", () => toggleModal(btn.dataset.modalClose))
  }

  function toggleModal(id) {
    document.body.classList.toggle("modal-open")
    const modal = document.getElementById(id)
    modal.classList.toggle("is-hidden");
  }
})();
