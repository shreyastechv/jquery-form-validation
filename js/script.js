function isStrEmpty(string) {
	if(string.trim().length == 0) {
		return true;
	}
	return false;
}

function validateFullname(fullname) {
	if(isStrEmpty(fullname)) {
		return false;
	}

	if(/\d/.test(fullname)) {
		return false;
	}

	return true;
}

function validateEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!emailPattern.test(email)) {
		return false;
	}
	return true;
}

function validatePhoneNum(phone) {
	if(phone.length != 10) {
		return false;
	}
	return true;
}

function validatePassword(password) {
	// Checking for length
	if(password.length < 8) {
		return false;
	}

	// Checking for lowercase letters
	if(password == password.toUpperCase()) {
		return false;
	}

	// Checking for uppercase letters
	if(password == password.toLowerCase()) {
		return false;
	}

	// Checking for numbers
	if(!/\d/.test(password)) {
		return false;
	}

	// Check for special characters
	if(!/[@$!%*?&]/.test(password)) {
		return false;
	}

	return true;
}

function validate() {
	const fullname = document.getElementById("fullname").value;
	const male = document.getElementById("male").checked;
	const female = document.getElementById("female").checked;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const age = document.getElementById("age").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm-password").value;

	let errorFullname = document.getElementById("error-fullname");
	let errorGender = document.getElementById("error-gender");
	let errorEmail = document.getElementById("error-email");
	let errorPhone = document.getElementById("error-phone");
	let errorAge = document.getElementById("error-age");
	let errorPassword = document.getElementById("error-password");
	let errorConfirmPassword = document.getElementById("error-confirm-password");

	errorFullname.textContent = "";
	errorGender.textContent = "";
	errorEmail.textContent = "";
	errorPhone.textContent = "";
	errorAge.textContent = "";
	errorPassword.textContent = "";
	errorConfirmPassword.textContent = "";

	// Name validation
	if(!validateFullname(fullname)) {
		errorFullname.textContent = "Not a valid name";
	}

	// Gender validation
	if(!male && !female) {
		errorGender.textContent = "Please select a gender";
	}

	// Email validation
	if(!validateEmail(email)) {
		errorEmail.textContent = "Not a valid email address";
	}

	// Phone number validation
	if(!validatePhoneNum(phone)) {
		errorPhone.textContent = "Not a valid phone number";
	}

	// Age validation
	if(age > 60 || age < 18) {
		errorAge.textContent = "Age should be between 18 and 60";
	}

	// Password validation
	if(!validatePassword(password)) {
		errorPassword.textContent = "Password must contain the following: A lowercase letter, an uppercase letter, a number, minimum of 8 characters and a special character (@$!%*?&)";
	}

	// Confirm password validation
	if(password !== confirmPassword) {
		errorConfirmPassword.textContent = "Passwords must be the same";
	}
}