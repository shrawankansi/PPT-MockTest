
    function validateForm() {
      var form = document.getElementById('registrationForm');
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var phone = document.getElementById('phone');
      var password = document.getElementById('password');
      var age = document.getElementById('age');
      var gender = document.getElementById('gender');
      var date = document.getElementById('date');
      var color = document.getElementById('color');

      var isValid = true;

      // Reset error messages
      var errorElements = form.getElementsByClassName('error-message');
      for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
      }

      // Name validation
      if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
      }

      // Email validation
      if (email.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
      } else if (!validateEmail(email.value)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
      }

      // Phone validation
      if (phone.value.trim() === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
      }

      // Password validation
      if (password.value.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
      }

      // Age validation
      if (age.value.trim() === '') {
        document.getElementById('ageError').textContent = 'Age is required';
        isValid = false;
      } else if (isNaN(age.value) || age.value < 0) {
        document.getElementById('ageError').textContent = 'Invalid age';
        isValid = false;
      }

      // Gender validation
      if (gender.value === '') {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
      }

      // Date validation
      if (date.value === '') {
        document.getElementById('dateError').textContent = 'Date is required';
        isValid = false;
      }

      // Color validation
      if (color.value === '') {
        document.getElementById('colorError').textContent = 'Color is required';
        isValid = false;
      }

      return isValid;
    }

    function validateEmail(email) {
      var regex = /^\S+@\S+\.\S+$/;
      return regex.test(email);
    }
