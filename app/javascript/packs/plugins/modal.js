const modalle = () => {

const modal = document.querySelector(".modal");
if (modal) {
    const trigg = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
      console.log(modal)  
        modal.classList.toggle("modal");
        console.log(modal)  
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
            console.log(event)
        }
    }

    trigg.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
  }
}
export { modalle }
