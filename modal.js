// modal.js

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modal");
  var images = document.querySelectorAll(".recipe-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var closeBtn = document.querySelector(".close");

  // Open the modal when clicking on a recipe image
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.innerText = captionText.innerText = this.alt.split(" - ")[1];;
      /*var imageUrl = "/assets/cake1.jpg"; // URL of the clicked image
      var caption = "Add chocolate to milk";*/
    });
  });

  // Close the modal when clicking on the close button
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

