// Get modal and button elements
const modal = document.getElementById('bookingModal');
const btn = document.getElementById('bookFittingBtn');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

// Open the modal when the "Book a fitting" button is clicked
btn.onclick = function () {
  modal.style.display = 'block';
}

// Close the modal when the "X" (close button) is clicked
closeBtn.onclick = function () {
  modal.style.display = 'none';
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent actual form submission (we handle it here)

  // Display success message after submitting the booking form
  successMessage.style.display = 'block';

  // Clear the form fields after successful submission (Optional)
  form.reset();


  // Hide modal after a brief delay (2 seconds)
  setTimeout(function () {
    modal.style.display = 'none';
  }, 2000);
});