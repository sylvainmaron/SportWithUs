import Rails from "@rails/ujs"

const fetchingCard = (card) => {
  if (card.classList.contains("card--matching")) {
    Rails.ajax({
      url: `offers/${card.dataset.offerId}/bookings`,
      type: "POST",
      success: function(data) {console.log(data)},
      error: function(data) {}
    })


    // fetch(`offers/${card.dataset.offerId}/bookings`, {
    //   method: "POST", 
    //   headers: { "X-CSRF-Token": csrfToken() },
    //   body: JSON.stringify({status: 'play'})
    // })
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
}

export { fetchingCard }