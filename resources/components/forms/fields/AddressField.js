import React from 'react';


class AddressFieldset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  handleChange(field, e) {
    this.setState({[field]: e.target.value})
    this.props.updateFields(field, e.target.value);
  }


  render() {
    return (
      <section>
        <div>
          <div>
            <input value={this.state.address} name={`${this.props.name}-adresss`} type="text" placeholder="Address" onChange={(e)=> this.handleChange('address', e)}/>
            <input value={this.state.city} name={`${this.props.name}-city`} type="text" placeholder="City" onChange={(e)=> this.handleChange('city', e)}/>
          </div>
          <div>
            <input value={this.state.state} name={`${this.props.name}-state`} type="text" placeholder="State" onChange={(e)=> this.handleChange('state', e)}/>
            <input value={this.state.zip} name={`${this.props.name}-zip`} type="text" placeholder="Zip" onChange={(e)=> this.handleChange('zip', e)}/>
          </div>
        </div>
        <style jsx>
          {`
            input {
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
          `}
        </style>
      </section>
    )

  }
}

export default AddressFieldset;
