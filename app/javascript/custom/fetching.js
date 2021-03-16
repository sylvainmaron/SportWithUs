function fetchingCard() {
  fetch("/test")
    .then((data) => data.text())
    .then((html) => {
      const results = document.querySelector("#results");
      results.insertAdjacentHTML("beforeend", data);
    });
}

export { fetchingCard }