// scroll to top
const scrollToTopTrigger = document.querySelector("#scroll-to-top");

if (scrollToTopTrigger) {
  scrollToTopTrigger.addEventListener("click", () => {
    console.log("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.onscroll = () => {
    if (window.scrollY > 500) {
      scrollToTopTrigger.classList.remove("hidden");
    } else {
      scrollToTopTrigger.classList.add("hidden");
    }
  };
}
