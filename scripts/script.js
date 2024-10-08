document.addEventListener("DOMContentLoaded", function () {
  // Get the query string from the URL
  const urlParams = new URLSearchParams(window.location.search);

  // Check if the 'env' parameter exists and if its value is 'dialog'
  if (urlParams.get("env") === "dialog") {
    // Add the class 'ic-env--dialog' to the <html> element
    document.documentElement.classList.add("ic-env--dialog");
  }
});
