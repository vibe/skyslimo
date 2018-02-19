'use strict'

const next = require('next');
let dev = process.env.NODE_ENV !== 'production'
 dev = false;
if(dev) {
  console.log('running in development mode')
}

class NextController {

	constructor () {
		this.app = next({ dev })
		this.handle = this.app.getRequestHandler()
		this.app.prepare()
	}
	* render (request, response) {
		request.request.csrfToken = request.csrfToken()
		yield this.handle(request.request, response.response)
		return;
	}
}

module.exports = new NextController()
