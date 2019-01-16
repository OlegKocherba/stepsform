import Validator from 'validator';

export const validate = (data, currentStep) => {
	const errors = {};

	function age(dateString) {
		var birthday = new Date(dateString);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getFullYear() - 1970) < 18;
	}

	if (currentStep === 1) {
		if(!Validator.isEmail(data.email)) {
			errors.email = "Invalid email"
		}
		if(!data.password) {
			errors.password = "Can`t be blank"
		}
		if(!data.conf_password || data.conf_password !== data.password) {
			errors.conf_password = " Should be equal to password"
		}
	}
	if (currentStep === 2) {
		if(!Validator.isISO8601(`${data.bYear}-${data.bMonth}-${data.bDay}`)) {
			errors.dateOfBirth = "Enter correct date"
		}

		if(age(data.bYear, data.bMonth,  data.bDay)) {
			errors.dateOfBirth = "You are too young ;)"
		}

		if(!data.gender) {
			errors.gender = "Choose gender"
		}

	}
	return errors
};