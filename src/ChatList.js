import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ChatBubble({ chat }) {
	console.log(chat)
	return (
		<ListItem sx={{ width: "80%", borderRadius: 4, my: 2, ml: chat.isRes ? "" : "20%", bgcolor: chat.isRes ? "#FFF" : "#FFD400" }}>
			<ListItemText primary={chat.content} secondary={chat.timestamp} sx={{ color: "#000", textAlign: chat.isRes ? "" : "right", whiteSpace: "pre-wrap"}} />
		</ListItem>
	)
}

export default function ChatList({ chatLog, getResponse }) {
	console.log("load")

	React.useEffect(() => {
		if (chatLog.length && !chatLog[chatLog.length-1].isRes) {
			getResponse()
		}
	}, [chatLog, getResponse])

	return (
		<List sx={{ width: "100% - 4", mx: 2}}>
			{chatLog.length > 0 ? chatLog.map((chat) => {
				console.log(chat.content)
				return (
					<ChatBubble chat={chat} />
				)
			}):''}
		</List>
	)
}
