import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ChatList from './ChatList'
import ChatInput from './ChatInput';
import gemini from './googleAI'


export default function ChatMain() {
	const [chatLog, chatUpdate] = React.useState([])

	async function getResponse() {
		const prompt = chatLog[chatLog.length-1].content;
		if (!prompt) return console.log('ERROR');
	
		const response = await gemini(prompt)

		const temp = [...chatLog]
		temp.push(response)
		chatUpdate(temp)
		console.log(chatLog)
	}

	function sendChat(input) {
		if (!input) return

		const now = new Date()
		const timestamp = `${now.getHours()}:${now.getMinutes()}`
		const temp = [...chatLog]
		temp.push({
			content: input,
			timestamp: timestamp,
			isRes: false
		})
		console.log(temp)
		chatUpdate(temp)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Container disableGutters maxWidth="100%" sx={{ pt: "64px", mb: "56px" }}>
				<Box sx={{ height: "100%" }}>
					<ChatList chatLog={chatLog} getResponse={getResponse}></ChatList>
				</Box>
			</Container>
			<ChatInput sendChat={sendChat}></ChatInput>
		</React.Fragment>
	);
}