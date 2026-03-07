document.addEventListener("DOMContentLoaded", function () {
  // Check if we're in an iFrame (or any frame)
  if (window.parent !== window) {
    // Add the class 'ic-env--dialog' to the <html> element
    document.documentElement.classList.add("ic-env--dialog");
  }
});
