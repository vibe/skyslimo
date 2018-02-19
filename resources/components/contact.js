import React from "react";
import Content from "../layouts/content";
import Validator from "./utils/validator";
import Errors from "./global/formErrors";
import axios from "axios";

const rules = [
  { field: "email", validators: ["isRequired", "isEmail"] },
  { field: "name", validators: ["isRequired"] },
  { field: "message", validators: ["isRequired"] }
];

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new Validator(rules);

    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false,
      errors: []
    };
  }
  generateErrorUI = () => <Errors errors={this.state.errors} />;

  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;

    const validation = this.validator.validateAll({ name, email, message });

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

    this.sendMessage(name, email, message);
  };

  sendMessage = (name, email, message) => {
    axios
      .post('/api/contact', { name, email, message })
      .then(repsonse => this.setState({ sent: true }));
  };

  render() {
    const errors = this.state.errors.length ? this.generateErrorUI() : null;
    return (
      <Content title="Get In Touch" id="contact">
        <section className="contact">
          <div className="details">
            <section className="location">
              <h1>Location</h1>
              <span>1250 aviation suite 140<br />San Jose, CA 95110</span>
            </section>
            <section className="phone">
              <h1>Phone</h1>
              <span><a href="tel:1-408-888-0414">408-888-0414</a></span>
            </section>
            <section className="email">
              <h1>E-Mail</h1>
              <span>
                <a
                  href="mailto:reservations@skyslimo.com?Subject=Skyslimo%20Contact"
                  target="_top"
                >
                  reservations@skyslimo.com
                </a>
              </span>
            </section>
          </div>

          <div className="form">
            {errors}
            {!this.state.sent
              ? <form method="post" onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, "name")}
                  />
                  <input
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, "email")}
                  />
                  <textarea
                    cols="40"
                    rows="10"
                    name="message"
                    placeholder="send a message..."
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, "message")}
                  />
                  <button type="submit">send</button>
                </form>
              : <span className="sent">Message Sent</span>}
          </div>
        </section>
        <style jsx>
          {
            `
        .contact {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 10px;
          padding: 60px 30px;
        }
        .details {
          text-align: center;
          color: #8a8a8a;
          width: 30%;
        }
        .form {
          width: 70%;
          padding: 0 25px;
        }
        h1 {
          padding: 10px 0;
          margin: 0;
          font-size: 18px;
        }
        .details section {
          padding-bottom: 30px;
        }
        .form {
          max-width: 775px;
          text-align: center;
        }
        .sent {
          margin-bottom: 10px;
          list-style: none;
          background: #ECC8C5;
          color: #B23230;
          border: 2px solid #e42525;
          padding: 5px;
          display: inline-block;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }
        input, textarea {
          margin-bottom: 20px;
          border: none;
          background: #E1E1E1;
          border-radius: 2px;
          color: #8a8a8a;
          padding: 10px;
          outline: none;
          width: 100%;

        }
        button {
          border: none;
          background: #1e3c72;
          padding: 10px 50px;
          color: #ffffff;
          max-width: 240px;
          border-radius: 4px;
          outline: none;
        }

        @media(max-width: 628px) {
          .contact {
            flex-direction: column;
            align-items: center;
          }
          .details, .form {
            width: 100%;
          }
        }
      `
          }
        </style>
      </Content>
    );
  }
}

export default Contact;
