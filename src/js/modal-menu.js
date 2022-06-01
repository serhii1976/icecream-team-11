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
