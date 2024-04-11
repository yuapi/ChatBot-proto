import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function TopAppBar() {
	return (
		<AppBar>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="arrowback"
					sx={{ mr: 2 }}
				>
				<ArrowBackIosNewIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ mr: "50px", flexGrow: 1 }}>
					챗봇
				</Typography>
			</Toolbar>
		</AppBar>
	);
}