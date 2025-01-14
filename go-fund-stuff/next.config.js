const withCSS = require('@zeit/next-css')

const dotEnvResult = require('dotenv').config()

const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
	throw dotEnvResult.error
}

module.exports = withCSS({
	env: {
		TEST: process.env.TEST,
		BACKEND_URL: prod ? 'https://api.example.com' : 'https://localhost:8080'
	}
})
