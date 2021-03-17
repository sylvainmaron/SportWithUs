import 'hammerjs'

const initHammer = (callback) => {
  const cards = document.querySelectorAll(".card");
  
  const maxAngle = 25;
  const smooth = 0.3;
  const threshold = 42;
  const thresholdMatch = 150;
  cards.forEach(setupDragAndDrop);
  
  function setupDragAndDrop(card) {
    const hammertime = new Hammer(card);
    const play = card.querySelector(".play");
    const pass = card.querySelector(".pass");

    hammertime.on('pan', function (e) {
      card.classList.remove('card--back');
      let posX = e.deltaX;
      let posY = Math.max(0, Math.abs(posX * smooth) - 25);
      let angle = Math.min(Math.abs(e.deltaX * smooth / 100), 1) * maxAngle;
      if (e.deltaX < 0) {
        angle *= -1;
      }
  
      card.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`;
      card.classList.remove('card--matching');
      card.classList.remove('card--nexting');
      if (posX > thresholdMatch) { 
        card.classList.add('card--matching');
        play.classList.add('play--transition');
      } else if (posX < -thresholdMatch) {
        card.classList.add('card--nexting');
        pass.classList.add('pass--transition');
      } else {
        play.classList.remove('play--transition');
        pass.classList.remove('pass--transition');
      }
      
      if (e.isFinal) {
        card.style.transform = ``;
        if (posX > thresholdMatch) {
          card.classList.add('card--match');
          callback(card);
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