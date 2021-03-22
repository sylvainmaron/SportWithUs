const modalle = () => {

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
// const body = document.querySelector("body");

  function toggleModal() {
    modal.classList.toggle("modal");
    // body.style.backgroundColor = "black";
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

}

export { modalle }
