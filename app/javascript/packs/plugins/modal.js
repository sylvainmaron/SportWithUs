const modalle = () => {

const modal = document.querySelector(".modal");
if (modal) {
    const trigger = document.querySelector(".trigger");
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

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
// const body = document.querySelector("body");

  function toggleModal() {
    modal.classList.toggle("modal");
    // body.style.backgroundColor = "black";
  }
}

export { modalle }
