import React from 'react'

class NotesField extends React.Component {
	render() {
		return (
			<section>
				<textarea placeholder="Type your request here"></textarea>
				<style jsx>
				{`
					textarea {
						border: none;
			            background: #E1E1E1;
			            border-radius: 2px;
			            color: #8a8a8a;
			            padding: 10px;
			            outline: none;
			            height: 200px;
			            width: 84%;
			            max-width: 508px;
					}
				`}
				</style>
			</section>
		)
	}
}

export default NotesField