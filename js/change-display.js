document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("regress").addEventListener("click", function () {
    // rm existing styles
    const existingLinks = document.querySelectorAll('link[rel="stylesheet"]');
    existingLinks.forEach((link) => link.parentNode.removeChild(link));
  });

  document
    .getElementById("progress-flex")
    .addEventListener("click", function () {
      const container = document.getElementById("container");
      container.classList.remove("grid-container");
      container.classList.add("flex-container");
    });

  document
    .getElementById("progress-grid")
    .addEventListener("click", function () {
      const container = document.getElementById("container");
      container.classList.remove("flex-container");
      container.classList.add("grid-container");
    });
});
