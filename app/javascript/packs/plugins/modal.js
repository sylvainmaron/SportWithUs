const modalle = () => {

  const onglets = document.querySelectorAll(".onglets li");
  if (onglets) { 
    onglets.forEach(toggleTabs)
    
    function toggleTabs(e) {
      const parent = document.querySelector(".main-modal");
      e.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("active")){
          return false
        }
        parent.classList.toggle('move-right');
        event.currentTarget.classList.toggle("active");
      });
    }
  }
}
export { modalle }
