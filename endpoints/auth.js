const GLOBAL = require('./../global.js')

const bluebird = require('bluebird')
const request = require('request')

module.exports = {
	signin: (email, password) => {
		return new Promise((resolve, reject) => {
			request({
				url: `${GLOBAL.BASE_URL}/signin`,
				method: 'POST',
				json: {
					email: email,
					password: password
				}
			}, (err, httpRsp, body) => {
				if (err) {
					reject(err)
				}

				resolve(body)
			})
		})
	},

	signout: (accessToken) => {
		return GLOBAL.makeRequest('GET', '/signout', accessToken)
	}
}