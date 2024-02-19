function validateForm(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    const errorMessages = [];
  
    if (fullName.length < 5) {
      errorMessages.push('Full Name must be at least 5 characters long.');
    }
  
    if (!email.includes('@')) {
      errorMessages.push('Email ID should contain @ character.');
    }
  
    if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
      errorMessages.push('Phone Number should be a 10-digit number and not equal to 123456789.');
    }
  
    if (password.length < 8 || password === 'password' || password === fullName) {
      errorMessages.push('Password should be at least 8 characters long and cannot be "password" or the same as Full Name.');
    }
  
    if (password !== confirmPassword) {
      errorMessages.push('Password and Confirm Password do not match.');
    }
  
    const errorMessagesElement = document.getElementById('errorMessages');
    errorMessagesElement.innerHTML = '';
  
    if (errorMessages.length > 0) {
      errorMessages.forEach(message => {
        const p = document.createElement('p');
        p.textContent = message;
        errorMessagesElement.appendChild(p);
      });
    } else {
      // Submit form if no errors
      document.getElementById('myForm').submit();
    }
  }
  