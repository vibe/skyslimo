const getInitialState = () => {
	return {
		title: '',
    authenticated: false,
    user: {},
		index: {
			toggleHR: false
		}
	}
}

export default getInitialState;
