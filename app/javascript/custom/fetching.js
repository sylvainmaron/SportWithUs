function fetchingCard(card) {
  if (card.classList.contains("card--matching")) {
    fetch("localhost:3000/offers/:offer_id/bookings", {
      method: "POST",
      body: JSON.stringify({ query: card.currentTarget.value })
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

export { fetchingCard }