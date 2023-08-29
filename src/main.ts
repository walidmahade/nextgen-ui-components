// scroll to top
const scrollToTopTrigger = document.querySelector("#scroll-to-top");

if (scrollToTopTrigger) {
  scrollToTopTrigger.addEventListener("click", () => {
    console.log("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
