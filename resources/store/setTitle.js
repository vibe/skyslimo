const setTitle = newTitle =>
    ({ title }) => {
    	console.log('setting title')
        return { title: newTitle };
    };

export default setTitle;
