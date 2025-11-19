  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form');
    const successMessage = document.createElement('div');
    successMessage.style.display = 'none';
    successMessage.textContent = 'Your message has been successfully submitted!';
    successMessage.style.color = 'green';
    form.appendChild(successMessage);

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission to check validation

      let valid = true;
      // Remove any previous error messages
      const errorSpans = form.querySelectorAll('.error');
      errorSpans.forEach(span => span.remove());

      // Validate First Name
      const fname = form.querySelector('#fname');
      if (!fname.value.trim()) {
        displayError(fname, 'First name is required');
        valid = false;
      }

      // Validate Last Name
      const lname = form.querySelector('#lname');
      if (!lname.value.trim()) {
        displayError(lname, 'Last name is required');
        valid = false;
      }

      // Validate Age
      const age = form.querySelector('#age');
      if (!age.value.trim() || age.value <= 0) {
        displayError(age, 'Please enter a valid age');
        valid = false;
      }

      // Validate Gender
      const gender = form.querySelector('#gender');
      if (!gender.value) {
        displayError(gender, 'Please select a gender');
        valid = false;
      }

      // Validate Reason
      const reasons = form.querySelectorAll('input[name="reason"]:checked');
      if (reasons.length === 0) {
        const reasonGroup = form.querySelector('.form-group p');
        const error = document.createElement('span');
        error.textContent = 'Please select at least one reason.';
        error.classList.add('error');
        error.style.color = 'red';
        reasonGroup.appendChild(error);
        valid = false;
      }

      // Validate Email
      const email = form.querySelector('#email');
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.value.trim() || !emailPattern.test(email.value)) {
        displayError(email, 'Please enter a valid email address');
        valid = false;
      }

      // Validate Phone Number
      const phone = form.querySelector('#phone');
      const phonePattern = /^\+?\d{1,4}?\s?\(?\d{1,3}?\)?[\s\.-]?\d{1,3}[\s\.-]?\d{1,4}$/;
      if (!phone.value.trim() || !phonePattern.test(phone.value)) {
        displayError(phone, 'Please enter a valid phone number');
        valid = false;
      }

      // Validate Message
      const message = form.querySelector('#message');
      if (!message.value.trim()) {
        displayError(message, 'Message is required');
        valid = false;
      }

      // If all validations pass, show success message
      if (valid) {
        successMessage.style.display = 'block';
      } else {
        successMessage.style.display = 'none';
      }
    });

    function displayError(inputElement, message) {
      const errorSpan = document.createElement('span');
      errorSpan.textContent = message;
      errorSpan.classList.add('error');
      errorSpan.style.color = 'red';
      inputElement.parentNode.appendChild(errorSpan);
    }
  });