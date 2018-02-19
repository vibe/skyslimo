import react from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input 
				value={this.props.value}
				onChange={this.onChange} />
		)
	}
}

export default Input