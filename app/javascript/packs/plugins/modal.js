const toggleTabs = (e) => {
  const parent = document.querySelector(".main-modal");
  e.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("active")){
      return false
    }
    parent.classList.toggle('move-right');
    document.querySelector(".onglets li.active").classList.remove("active")
    event.currentTarget.classList.add("active");
  });
}

const modalle = () => {

  const onglets = document.querySelectorAll(".onglets li");
  if (onglets) { 
    onglets.forEach(toggleTabs)    
  }
}
export { modalle }
