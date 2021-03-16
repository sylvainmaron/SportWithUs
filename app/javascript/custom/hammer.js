const cards = document.querySelectorAll(".card");
const play = document.querySelector(".play");
const pass = document.querySelector(".pass");

cards.forEach((card) => {
  console.log(card)
  let hammerTime = new Hammer(card)
  hammerTime.on('tap', function(e){
    let posX = e.deltaX
    let posY = e.deltaY
    card.style.transform = `translateX(${posX}px) translateY(${posY}px)`
  })
 
})
