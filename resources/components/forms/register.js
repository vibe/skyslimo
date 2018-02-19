import react from 'react'
import axios from 'axios'
import Validator from '../utils/validator'
import Link from 'next/link'

import Input from './fields/input'
import Errors from '../global/formErrors'

const rules = [
	{ field: 'email', validators: ['isRequired', 'isEmail', 'isUnique'] },
	{ field: 'username', validators: ['isRequired', 'isUnique'] },
	{ field: 'password', validators: ['isRequired'] }
]


class Register extends React.Component {
	constructor() {
		super()
		this.validator = new Validator(rules);
		this.state = {
			email: '',
			username: '',
			password: '',
			errors: []
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { email, username, password } = this.state;
		const validation = this.validator.validateAll({ email, username, password })

		if(validation.fails()){
		  	this.setState({
		  		errors: validation.messages()
		  	})
			return;
		} else {
			this.setState({
				errors: []
			})
		}
		this.register(this.state);
	}


	register = ({email, username, password}) => {
		axios.post('/api/account/create', {
		 	email, username, password
		}).then(response => {
			if(response.data.valid) {
				console.log('user registered')
			} else {
				const errors = response.data.payload.errors.map(error => {
					return {
						valid: false, 
						payload: {
							field: error.field,
							message: error.message
						}
					}
				})
				this.setState({errors})
			}
		}) 
	}

	handleChange = (field, e) => {
		this.setState({[field]: e.target.value})
	}

	generateErrorUI = () => <Errors errors={this.state.errors} />

	render() {
		const errors = this.state.errors.length ? this.generateErrorUI() : null;
		return (
			<div>
			{ errors }
			<form onSubmit={this.onSubmit} method="post">
				<input 
					type="email"
					placeholder="example@email.com"
					name="email"
					value={this.state.email}
					onChange={this.handleChange.bind(this, 'email')}/>
				<input
					type="text"
					placeholder="username"
					name="username"
					value={this.state.username}
					onChange={this.handleChange.bind(this, 'username')} />

				<input 
					type="password"
					placeholder="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange.bind(this, 'password')}/>



				<button type="submit">Register</button>
			</form>
			<Link href="/login"><a>Already have an account?</a></Link>
			<style jsx>
			{`
				div {
					background: #ffffff;
					max-width: 660px;
					padding: 20px 0 50px;
					margin: 0 auto;
					text-align: center;
				}
				input {
					display: block;
					margin: 0 auto;
					    margin-bottom: 20px;
					    border: none;
					    background: #E1E1E1;
					    border-radius: 2px;
					    color: #8a8a8a;
					    padding: 10px;
					    outline: none;
					    width:  80%;
					    max-width: 350px;
				}
				button {
					cursor: pointer;
				    border: none;
				    background: #1e3c72;
				    padding: 10px 50px;
				    color: #ffffff;
				    max-width: 240px;
				    border-radius: 4px;
				    outline: none;
				    text-decoration: none;
				}
				a {
					text-decoration: none;
					padding: 15px;
					display: block;
				}
			`}
			</style>
		</div>
	)}
}


export default Register

