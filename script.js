
    // JavaScript code to handle pop-up functionality

    // Open the registration pop-up
    function openPopup(popupId) {
      var popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = "block";
      }
    }

    // Close the registration pop-up
    function closePopup(popupId) {
      var popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = "none";
      }
    }

    // Attach click event listener to "Apply Now" button
    var applyNowButton = document.querySelector(".hero-button");
    if (applyNowButton) {
      applyNowButton.addEventListener("click", function() {
        openPopup("registrationPopup");
      });
    }
    var applyNowButton = document.querySelector(".hero-button");
if (applyNowButton) {
  applyNowButton.addEventListener("click", function() {
    openPopup("registrationPopup");
  });
}

// Attach click event listener to close button inside the pop-up
var closeButton = document.querySelector(".popup-close");
if (closeButton) {
  closeButton.addEventListener("click", function() {
    closePopup("registrationPopup");
  });
}






