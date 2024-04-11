import { GoogleGenerativeAI } from '@google/generative-ai'
const { gemini_api_key } = require('./config.json')

const genAI = new GoogleGenerativeAI(gemini_api_key)
const model = genAI.getGenerativeModel({ model: "gemini-pro" })

export default async function gemini(prompt) {
	const result = await model.generateContent(prompt)
	const content = await result.response.text().replace(/\*/g, '')

	console.log(content)

	const now = new Date()
	const timestamp = `${now.getHours()}:${now.getMinutes()}`

	const response = {
		content: content,
		createAt: timestamp,
		isRes: true
	}
	return response
}