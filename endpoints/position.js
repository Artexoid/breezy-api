const GLOBAL = require('./../global.js')

module.exports = {
	get: (accessToken, company_id, position_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}`, accessToken)
	},

	update: (accessToken, company_id, position_id, position) => {
		return GLOBAL.makeRequest('PUT', `/company/${company_id}/position/${position_id}`, accessToken, position)
	},

	update_state: (accessToken, company_id, position_id, state) => {
		return GLOBAL.makeRequest('PUT', `/company/${company_id}/position/${position_id}/state`, accessToken, state)
	},

	stream: (accessToken, company_id, position_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/stream`, accessToken)
	},

	team: (accessToken, company_id, position_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/team`, accessToken)
	},

	all_positions: (accessToken, company_id, status) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/positions?state=${status}`, accessToken)
	},

	new_position: (accessToken, company_id, position) => {
		return GLOBAL.makeRequest('POST', `/company/${company_id}/positions`, accessToken, position)
	}
}