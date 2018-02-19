import react from "react";
import axios from "axios";
import Link from "next/link";
import Validator from "../utils/validator";

import Errors from "../global/formErrors";

const rules = [
    { field: "email", validators: ["isRequired", "isEmail"] },
    { field: "password", validators: ["isRequired"] }
];

class LoginForm extends React.Component {
    constructor() {
        super();
        this.validator = new Validator(rules);
        this.state = {
            email: "",
            password: "",
            errors: []
        };
    }
    login = (email, password) => {
        axios
            .post("/api/auth", { email, password })
            .then(response => {
                console.log(response.data);
                const token = response.data.payload.token;
                if (!!token) {
                    localStorage.setItem("token", token);
                }
            })
            .catch(error => {
                localStorage.removeItem("token");
                const errors = error.response.data.payload.errors.map(error => {
                    return {
                        valid: false,
                        payload: {
                            field: "Authorization",
                            message: error.message
                        }
                    };
                });
                this.setState({ errors });
            });
    };

    generateErrorUI = () => <Errors errors={this.state.errors} />;

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        const validation = this.validator.validateAll({ email, password });

        if (validation.fails()) {
            this.setState({
                errors: validation.messages()
            });
            return;
        } else {
            this.setState({
                errors: []
            });
        }

        this.login(email, password);
    };

    handleChange = (field, e) => {
        this.setState({ [field]: e.target.value });
    };

    render() {
        const errors = this.state.errors.length ? this.generateErrorUI() : null;
        return (
            <div>
                {errors}
                <form onSubmit={this.onSubmit} method="post">
                    <input
                        type="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, "email")}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this, "password")}
                    />
                    <button type="submit">Login</button>
                </form>
                <Link href="/register"><a>Create an account?</a></Link>
                <style jsx>
                    {
                        `
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
			`
                    }
                </style>
            </div>
        );
    }
}

export default LoginForm;
