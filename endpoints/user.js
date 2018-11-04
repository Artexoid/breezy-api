const GLOBAL = require('./../global.js')

module.exports = {
	get: (accessToken, user_id) => {
		return GLOBAL.makeRequest('GET', `/user?user_id=${user_id}`, accessToken)
	},

	details: (accessToken) => {
		return GLOBAL.makeRequest('GET', '/user/details', accessToken)
	}
}