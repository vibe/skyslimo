import React from 'react';
import PersonalField from './fields/PersonalFields'
import AddressField from './fields/AddressField'
import DateField from './fields/DateField'
import TimeField from './fields/TimeField'
import PaymentFields from './fields/Payment'
import FlightFields from './fields/FlightFields'
import NotesField from './fields/NotesField'

class Reservation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        name: {
          first: '',
          last: ''
        },
        email: '',
        phone: '',
        date: '',
        time: '',
        passenger_count: '',
        pickup: {
          type: 'address',
          address: '',
          city: '',
          state: '',
          zip: ''
        },
        dropoff: {
          address: '',
          city: '',
          state: '',
          zip: ''
        },
        stops: [],
        stopKeys:[],
        credit_card_info: {
          card_number: '',
          card_holder_name: '',
          expires_at: '',
          cvc: ''
        }
    }
  }
  addStop = () => {
    this.setState({
      stops: [
        ...this.state.stops,
        { address: '', city: '', state: '', zip: '' }
      ],
      stopKeys: [
        ...this.state.stopKeys,
        Math.random()
      ]
    });
  }
  removeStop = (index) => {
    this.setState({
      stops: [
        ...this.state.stops.slice(0, index),
        ...this.state.stops.slice(index+1)
      ],
      stopKeys: [
        ...this.state.stopKeys.slice(0, index),
        ...this.state.stopKeys.slice(index+1)
      ]
    })
  }
  updatePickup = (field, value) => {
    this.setState({
      pickup: {
        ...this.state.pickup,
        [field]: value
      }
    })
  }
  updateDropoff = (field, value) => {
    this.setState({
      dropoff: {
        ...this.state.dropoff,
        [field]: value
      }
    })
  }
  updateStop = (stop, field, value) => {
    this.setState({
      stops: [
        ...this.state.stops.slice(0, stop),
        {...this.state.stops[stop], [field] : value },
        ...this.state.stops.slice(stop+1)
      ]
    })
  }


  updatePersonalFields = (field, content) => {
    console.log(field, content);

    switch(field) {
      case 'name.first':
        this.setState({name: {...this.state.name, first: content}})
      break;
      case 'name.last':
        this.setState({name: {...this.state.name, last: content}})
      break;
      case 'email':
        this.setState({email: content})
      break;
      case 'phone':
        this.setState({phone: content})
      break;
      case 'passenger_count':
        this.setState({passenger_count: content})
      break;        

    }
  }

  updateDate = (date) => {
      date = date.format('YYYY-MM-DD');
      this.setState({date})
  }

  updateTime = (time) => {
    this.setState({time})
  }

  updateCard = (field, value) => {

    switch(field) {
      case 'name':
        field = 'card_holder_name'
      break;
      case 'number':
        field = 'card_number'
      break;
      case 'expiry':
        field = 'expires_at'
      break;
      case 'cvc':
        field = 'cvc'
      break;
    }
    this.setState({
      credit_card_info: {...this.state.credit_card_info, [field]: value}
    })
  }

  handleReservation = (e) => {
    e.preventDefault();
    this.props.handleReservation('reserve', {...this.state})

  }
  handleQuoteRequest = (e) => {
    e.preventDefault();
    this.props.handleReservation('quote', {...this.state})
  }
  render() {
    return (
      <section className="reservationForm">
        <form method="get">
          <PersonalField
            updateFields={this.updatePersonalFields} />
          <p className="title">When</p>
          <section className="when">
            <div className="date"><DateField numberOfMonths={1} updateDate={this.updateDate}/></div>
            <div className="time"><TimeField updateTime={this.updateTime}/></div>
          </section>


          <p className="title">Where From</p>
          <AddressField name="pickup"
                        updateFields={this.updatePickup}
          />
          { this.props.reservationType === 'PTP' &&
            <div>
              <p>Optional - Coming from the airport?</p>
              <FlightFields />
            </div>
          }
          { this.props.reservationType === 'Charter' &&
          <section>
            <p className="title">Stops</p>
            {
              this.state.stops.map((stop, index)=> (
                <div key={this.state.stopKeys[index]}>
                  <div>
                    <p className="remove">Stop <span>#{index + 1}</span> - <button type="button" onClick={()=>{this.removeStop(index)}}>Remove</button></p>
                  </div>
                  <AddressField index={index}
                                name={`stop${index+1}`}
                                updateFields={this.updateStop.bind(this, index)}

                  />
                </div>
              ))
            }
            <button type="button" className="addStop" onClick={this.addStop}>Add Stop</button>
          </section>

          }
          <p className="title">Where To</p>
          <AddressField name="dropoff"
                        updateFields={this.updateDropoff}/>

          <p className="title">Payment info</p>
          <p>Optional when requesting quote</p>

          <PaymentFields updateCardFields={this.updateCard}/>
          
          <p className="title">Special Request?</p>
          <NotesField />


          <button type="submit" className="submit" onClick={this.handleQuoteRequest}>Get a quote</button>
          <button type="submit" className="submit" onClick={this.handleReservation}>Book it now</button>
        </form>
        <style jsx>
          {`
            form {
              max-width: 80%;
              margin: 0 auto;
              text-align: center;
              padding-top: 50px;
            }
            .title {
             overflow: hidden;
             text-align: center;
             max-width: 610px;
             margin: 0 auto;
             color: #8a8a8a;
             padding: 10px 0 30px 0;
             text-transform: lowercase;
             font-size: 18px;
            }
            .title:before,
            .title:after {
             background-color: #8a8a8a;
             content: "";
             display: inline-block;
             height: 3px;
             position: relative;
             vertical-align: middle;
             width: 50%;
            }
            .title:before {
             right: 1em;
             margin-left: -50%;
            }
            .title:after {
             left: 1em;
             margin-right: -50%;
           }
           .submit, .addStop {
             border: none;
             background: #1e3c72;
             padding: 10px 50px;
             color: #ffffff;
             max-width: 240px;
             border-radius: 4px;
             outline: none;
             margin: 15px;
           }
           .remove {
             color: #8a8a8a;
             font-size: 18px;
           }
           .remove button {
             border: none;
             background: #1e3c72;
             padding: 5px 10px;
             color: #ffffff;
             max-width: 240px;
             border-radius: 4px;
             outline: none;
           }


           .date, .time{
             margin-bottom: 15px;
           }
          `}
        </style>
      </section>
    )
  }

}

export default Reservation
