import Rails from "@rails/ujs"

const fetchingCard = (card) => {
  if (card.classList.contains("card--match")) {
    Rails.ajax({
      url: `offers/${card.dataset.offerId}/bookings`,
      type: "POST",
      success: function(data) {console.log(data)},
      error: function(data) {}
    })
  }
}

export { fetchingCard }