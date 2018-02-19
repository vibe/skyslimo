const emailRegex = /^([\w-]+(?:\.[\w-]+)*)(\+[\w\.-]+)?@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i


const Validators = {
	isRequired(field, payload) {
		if(!!payload[field]) {
			return {
				valid: true
			}
		}
		return {
			valid: false,
			payload: {
				field,
				message: `Sorry the ${field} field is required`
			}
		}
	},
	isEmail(field, payload) {
		const valid = emailRegex.test(payload[field])
		if(valid) {
			return {
				valid
			}
		} else {
			return {
				valid,
				payload: {
					field,
					message: `Sorry the email field seems to be invalid`
				}
			}
		}
	},
	isUnique(field, payload) {
		return {
			valid: true
		}
	}
}


export default Validators