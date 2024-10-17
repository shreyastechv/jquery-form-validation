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
	let errorStr ="";

	// Checking for length
	if(password.length < 8) {
		errorStr += "<br>- more than 8 characters";
	}

	// Checking for lowercase letters
	if(password == password.toUpperCase()) {
		errorStr += "<br>- a lowercase letter";
	}

	// Checking for uppercase letters
	if(password == password.toLowerCase()) {
		errorStr += "<br>- an uppercase letter";
	}

	// Checking for numbers
	if(!/\d/.test(password)) {
		errorStr += "<br>- one digit";
	}

	// Check for special characters
	if(!/[@$!%*?&]/.test(password)) {
		errorStr += "<br>- one special character (@$!%*?&)";
	}

	return errorStr;
}

function validate() {
	const fullname = $("#fullname").val();
	const gender = $("input[name='gender']:checked").val();
	const email = $("#email").val();
	const phone = $("#phone").val();
	const age = $("#age").val();
	const password = $("#password").val();
	const confirmPassword = $("#confirm-password").val();

	const errorFullname = $("#error-fullname");
	const errorGender = $("#error-gender");
	const errorEmail = $("#error-email");
	const errorPhone = $("#error-phone");
	const errorAge = $("#error-age");
	const errorPassword = $("#error-password");
	const errorConfirmPassword = $("#error-confirm-password");

	errorFullname.text("");
	errorGender.text("");
	errorEmail.text("");
	errorPhone.text("");
	errorAge.text("");
	errorPassword.text("");
	errorConfirmPassword.text("");

	// Name validation
	if(!validateFullname(fullname)) {
		errorFullname.text("Not a valid name");
	}

	// Gender validation
	if(!gender) {
		errorGender.text("Please select a gender");
	}

	// Email validation
	if(!validateEmail(email)) {
		errorEmail.text("Not a valid email address");
	}

	// Phone number validation
	if(!validatePhoneNum(phone)) {
		errorPhone.text("Not a valid phone number");
	}

	// Age validation
	if(age > 60 || age < 18) {
		errorAge.text("Age should be between 18 and 60");
	}

	// Password validation
	const errorStr = validatePassword(password);
	if(errorStr != "") {
		errorPassword.html("Password must contain atleast the following:" + errorStr);
	}
	else if(password !== confirmPassword) {
		errorConfirmPassword.text("Passwords must be the same");
	}
}