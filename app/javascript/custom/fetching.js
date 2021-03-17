import { csrfToken } from "@rails/ujs";


const fetchingCard = (card) => {
  if (card.classList.contains("card--matching")) {
    fetch(`offers/${card.dataset.offerId}/bookings`, {
      method: "POST", 
      headers: { "X-CSRF-Token": csrfToken() },
      body: JSON.stringify({status: 'play'})
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

export { fetchingCard }