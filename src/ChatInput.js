import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function ChatInput({ sendChat }) {
	const [input, setInput] = React.useState([])
	
	function onChangeInput(event) {
		setInput(event.target.value)
		console.log(input)
	}

	return (
		<AppBar position="fixed" color="" sx={{ top: 'auto', bottom: 0 }}>
			<Toolbar disableGutters sx={{ pl: "16px" }}>
				<TextField id="outlined-textarea" fullWidth placeholder="내용을 입력해주세요." multiline maxRows={1} variant="standard" onChange={onChangeInput} value={input}/>
				<IconButton
					size="large"
					edge="start"
					color="primary"
					aria-label="send"
					sx={{ ml: 0 }}
					onClick={() => {
						sendChat(input)
						setInput("")
					}}>
					<SendIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
