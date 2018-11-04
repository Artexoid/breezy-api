const request = require('request')

module.exports.BASE_URL = 'https://breezy.hr/public/api/v3'

module.exports.makeRequest = (method, url, accessToken, reqBody) => {
	if (method == 'GET') {
		return new Promise((resolve, reject) => {
			request({
				method: method,
				url: module.exports.BASE_URL + url,
				headers: {
					'Authorization': accessToken
					'Content-Type': 'application/json'
				}
			}, (err, htmlRsp, body) => {
				if (err || body.error) {
					reject(err || body.error)
				}

				resolve(body)
			})
		})
	}
	else {
		return new Promise((resolve, reject) => {
			request({
				method: method,
				url: module.exports.BASE_URL + url,
				json: reqBody,
				headers: {
					'Authorization': accessToken,
					'Content-Type': 'application/json'
				}
			}, (err, htmlRsp, body) => {
				if (err || body.error) {
					reject(err || body.error)
				}

				resolve(body)
			})
		})
	}
}

module.exports.uploadFile = (url, accessToken, file) => {
	return new Promise((resolve, reject) => {
		request({
			method: 'POST',
			url: module.exports.BASE_URL + url,
			headers: {
				'Authorization': accessToken,
				'Content-Type': 'application/json'
			},
			formData: {
				data: file
			}
		}, (err, htmlRsp, body) => {
			if (err || body.error) {
				reject(err || body.error)
			}

			resolve(body)
		})
	})
}