const helpSvg = () => {
  const svg = document.querySelector(".swipe-svg");
  const detected = () => {
    if (true) {
        svg.style.display = "none"
      }
      const set = setTimeout(display, 15000);
  }

  const display = () => {
    svg.style.display = "block"
  }

  if (svg) {
    const set = setTimeout(display, 2000);
    document.addEventListener("touchstart", detected);
  }

}

export { helpSvg }