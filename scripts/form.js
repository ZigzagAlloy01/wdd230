const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const ratingValue = document.getElementById('ratingValue');
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const submitButton = document.getElementById("myForm").submitButton;

function updateRatingValue(value) {
    ratingValue.textContent = value;
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    document.getElementById('password').focus();
    return false;
    }

    if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('password').focus();
    return false;
    }
    window.location.href = 'thankyou.html';
    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@(byui|byuh)[-.]edu$/;
    if (!re.test(email)) {
      return false;
    }

    if (email.toLowerCase().indexOf("@byui.edu") === -1) {
      return false;
    }
    return true;
  }
  
  emailInput.addEventListener("blur", function() {
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid BYUI email address (username@byui.edu)";
      emailInput.classList.add("error");
      submitButton.disabled = true;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("error");
      submitButton.disabled = false; 
    }
  });

  document.getElementById('timestamp').value = new Date().toISOString().slice(0, 19);