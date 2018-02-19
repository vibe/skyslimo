import React from 'react'


class PersonalFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'name.first': '',
        'name.last': '',
        email: '',
        phone: '',
        vehicleType: '',
        passenger_count: ''
    }
  }


  handleChange = (field, value) => {
    this.setState({[field]: value})
    this.props.updateFields(field, value);
  }
  handlePhone = (value) => {
    const phone = value.replace(/[^\d]/,'');
    this.setState({phone});
    this.props.updateFields('phone', value);
  }
  handlePassengerChange = (value) => {
    console.log('triggered');
    let passenger_count = value.replace(/[^\d]/,'');
    if(passenger_count < 0) {
      passenger_count = 0
    } else if (passenger_count > 14) {
      passenger_count = 14;
    }

    this.setState({passenger_count});
    this.props.updateFields('passenger_count', passenger_count);
  }

  render() {
    return (
      <section>
        <div>
          <input type="text" placeholder="first name"
                 onChange={(e)=> this.handleChange('name.first', e.target.value)}
                 value={this.state.first}/>
          <input type="text" placeholder="last name"
                 onChange={ e => this.handleChange('name.last', e.target.value)}
                 value={this.state.last}/>
        </div>
        <div>
          <input type="email" placeholder="email"
                 onChange={e => this.handleChange('email', e.target.value)}
                 value={this.state.email}/>
          <input type="text" placeholder="phone"
                 onChange={e => this.handlePhone(e.target.value)}
                 value={this.state.phone}
                 maxLength='12'/>
        </div>
        <div>
            <select>
                <option value="">- Vehicle type -</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="van">Van</option>
            </select>
          <input type="text" placeholder="# of Passengers"
                 onChange={e => this.handlePassengerChange(e.target.value)}
                 value={this.state.passenger_count}/>
        </div>
        <style jsx>
        {`
          select, input {
            margin: 0 10px;
            margin-bottom: 20px;
            border: none;
            background: #E1E1E1;
            border-radius: 2px;
            color: #8a8a8a;
            padding: 10px;
            outline: none;
            width: 40%;
            max-width: 295px;
          }
          select {
            height: 35px;
          }
        `}</style>
      </section>
    )
  }
}

export default PersonalFields
