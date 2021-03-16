import 'hammerjs'

const initHammer = () => {
  const cards = document.querySelectorAll(".card");
  const play = document.querySelector(".play");
  const pass = document.querySelector(".pass");
  
  const maxAngle = 25;
  const smooth = 0.3;
  const threshold = 42;
  const thresholdMatch = 150;
  cards.forEach(setupDragAndDrop);
  
  function setupDragAndDrop(card) {
    const hammertime = new Hammer(card);
  
    hammertime.on('pan', function (e) {
      card.classList.remove('card--back');
      let posX = e.deltaX;
      let posY = Math.max(0, Math.abs(posX * smooth) - 25);
      let angle = Math.min(Math.abs(e.deltaX * smooth / 100), 1) * maxAngle;
      if (e.deltaX < 0) {
        angle *= -1;
      }
  
      card.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`;
      play.style.opacity = 0;
      pass.style.opacity = 0;
      if (posX > thresholdMatch) {
        card.classList.add('card--matching');
        play.style.opacity = 1;
      } else if (posX < -thresholdMatch) {
        card.classList.add('card--nexting');
        pass.style.opacity = 1;
      }
  
      if (e.isFinal) {
        card.style.transform = ``;
        if (posX > thresholdMatch) {
          card.classList.add('card--match');
        } else if (posX < -thresholdMatch) {
          card.classList.add('card--next');
        } else {
          card.classList.add('card--back');
        }
      }
    });
  }
}  


export { initHammer }