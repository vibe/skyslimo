'use strict'

import Validators from './validators'

class Validator {
	constructor(rules) {
		this.rules = rules;
		this.messages = [];
	}

	genValidation = () => {
		const messages = this.messages;
		const rules = this.rules;

		return {
			messages() {
				return messages
			},
			fails() {
				if(messages.length) {
					return true;
				} else {
					return false;
				}
			}
		}
	}

	runValidator = (field, payload, validator) => {
		const validation = Validators[validator](field, payload)
		return validation;
	}

	runValidators = (field, payload, validators) => {
		return validators.reduce((errors, validator) => {
			const validation = this.runValidator(field, payload, validator)
			if(validation.valid === true) {
				return errors
			} else {
				return [...errors, validation]
			}
		}, [])
	}

	validateAll = (payload) => {
		this.messages = [];
		const errorsIfAny = this.rules.reduce((errors, rule) => {
			const { field, validators} = rule;
			const validations = this.runValidators(field, payload, validators)
			if(validations.length) {
				return [...errors, ...validations]
			}
			return errors;
		}, []);

		this.messages = [...this.messages, ...errorsIfAny]

		return this.genValidation();
	}
}

export default Validator
