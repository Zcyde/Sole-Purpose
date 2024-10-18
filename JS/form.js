function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const passwordCriteria = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordCriteria.test(password)) {
        alert("Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.");
        return false; 
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; 
    }

    return true; 
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-content');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
      alert('Your account has been created successfully!'); 
      form.reset(); // Resets the form fields if needed
    });
});
  

