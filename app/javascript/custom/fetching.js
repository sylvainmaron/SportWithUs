import { csrfToken } from "@rails/ujs";


const fetchingCard = (card) => {
  console.log("je suis la", card.classList.contains("card--matching"))
  console.log(csrfToken())
  if (card.classList.contains("card--matching")) {
    console.log()
    fetch(`offers/${card.dataset.offerId}/bookings`, {
      method: "POST", 
      headers: { "X-CSRF-Token": csrfToken() }
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

export { fetchingCard }