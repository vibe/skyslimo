"use strict";

const Validator = use("Validator");
const User = use("App/Model/User");
const Mail = use("Mail");

class UsersController {
  * contact (request, response) {
    const payload = request.only('name', 'email', 'message');

    yield Mail.send('emails.contact', payload, message => {
        message.from('reservations@skyslimo.com', 'SkysLimo')
        message.sender('reservations@skyslimo.com', 'SkysLimo')
        message.to('reservations@skyslimo.com')
        message.subject('SkysLimo - Contact form was filled out!')
        message.priority('high')

    })

    response.json({
      valid: true
    })
  }
}

module.exports = UsersController;
