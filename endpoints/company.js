const GLOBAL = require('./../global.js')

module.exports = {
	get: (accessToken, company_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}`, accessToken)
	},

	all_pipelines: (accessToken, company_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/pipelines`, accessToken)
	},

	pipeline: (accessToken, company_id, pipeline_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/pipeline/${position_id}`, accessToken)
	},

	all_questionnaires: (accessToken, company_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/questionnaires`, accessToken)
	},

	questionnaire: (accessToken, company_id, questionnaire_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/questionnaire/${questionnaire_id}`, accessToken)
	},

	all_templates: (accessToken, company_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/templates`, accessToken)
	},

	template: (accessToken, company_id, template_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/template/${template_id}`, accessToken)
	},

	all_companies: (accessToken) => {
		return GLOBAL.makeRequest('GET', '/companies', accessToken)
	}
}