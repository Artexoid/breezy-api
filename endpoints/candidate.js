const GLOBAL = require('./../global.js')

module.exports = {
	get: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}`, accessToken)
	},

	update: (accessToken, company_id, position_id, candidate_id, candidate) => {
		return GLOBAL.makeRequest('PUT', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}`, accessToken, candidate)
	},

	assessments: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/assessments`, accessToken)
	},

	background_checks: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/background-checks`, accessToken)
	},

	conversation: (accessToken, company_id, position_id, candidate_id, include_delayed, skip) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/conversation?include_delayed=${include_delayed}&skip=${skip}`, accessToken)
	},

	new_conversation: (accessToken, company_id, position_id, candidate_id, conversation) => {
		return GLOBAL.makeRequest('POST', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/conversation`, accessToken, conversation)
	},

	documents: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/documents`, accessToken)
	},

	add_document: (accessToken, company_id, position_id, candidate_id, doc) => {
		return GLOBAL.uploadFile(`/company/${company_id}/position/${position_id}/candidate/${candidate_id}/documents`, accessToken, doc)
	},

	add_education: (accessToken, company_id, position_id, candidate_id, education) => {
		return GLOBAL.makeRequest('PUT', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/education`, accessToken, education)
	},

	meta: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/meta`, accessToken)
	},

	move: (accessToken, company_id, position_id, candidate_id, move) => {
		return GLOBAL.makeRequest('POST', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/move`, accessToken, move)
	},

	save_questionnaire: (accessToken, company_id, position_id, candidate_id, questionnaire_id, responses) => {
		return GLOBAL.makeRequest('POST' `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/questionnaire/${questionnaire_id}`, accessToken, responses)
	},

	questionnaires: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/questionnaires`, accessToken)
	},

	add_resume: (accessToken, company_id, position_id, candidate_id, resume) => {
		return GLOBAL.uploadFile(`/company/${company_id}/position/${position_id}/candidate/${candidate_id}/documents`, accessToken, resume)
	},

	send_questionnaire: (accessToken, company_id, position_id, candidate_id, questionnaire_id, should_email) => {
		return GLOBAL.makeRequest('POST', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/send-questionnaire?questionnaire_id=${questionnaire_id}&email_candidate=${should_email}`, accessToken)
	},

	move_to_stage: (accessToken, company_id, position_id, candidate_id, stage_id) => {
		return GLOBAL.makeRequest('PUT', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/stage`, accessToken, { stage_id: stage_id })
	},

	stream: (accessToken, company_id, position_id, candidate_id) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/stream`, accessToken)
	},

	add_note_to_stream: (accessToken, company_id, position_id, candidate_id, note) => {
		return GLOBAL.makeRequest('POST', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/stream`, accessToken, note)
	},

	add_work_history: (accessToken, company_id, position_id, candidate_id, history) => {
		return GLOBAL.makeRequest('PUT', `/company/${company_id}/position/${position_id}/candidate/${candidate_id}/work-history`, accessToken, history)
	},

	all: (accessToken, company_id, position_id, page, pageSize, sort) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/position/${position_id}/candidates?pageSize=${page_size}&page=${page}&sort=${sort}`, accessToken)
	},

	new: (accessToken, company_id, position_id, candidate) => {
		return GLOBAL.makeRequest('POST', `/company/${company_id}/position/${position_id}/candidates`, accessToken, candidate)
	},

	new_from_resume: (accessToken, company_id, position_id, stage_id, actions_enabled, resume) => {
		return GLOBAL.uploadFile(`/company/${company_id}/position/${position_id}/candidates/resume?stage_id=${stage_id}&stage_actions_enabled=${actions_enabled}`, accessToken, resume)
	},

	search: (accessToken, company_id, email) => {
		return GLOBAL.makeRequest('GET', `/company/${company_id}/candidates/search?email_address=${email}`, accessToken)
	}
} 