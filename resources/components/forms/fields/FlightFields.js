import React from 'react';


class FlightFields extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flight: ''
		}
	}

	render() {
		return (
			<section>
			<div>
				<select>
	                <option value="">- Airport -</option>
	                <option value="sedan">SJC</option>
	                <option value="suv">SFO</option>
	                <option value="van">OAK</option>
            	</select>
				<input type="text" placeholder="Flight #"/>
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
	        `}
	        </style>
			</section>
		)
	}
}

export default FlightFields