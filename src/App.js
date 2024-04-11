import './App.css';
import Box from '@mui/material/Box';
import TopAppBar from './TopAppBar';
import ChatMain from './ChatMain'

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Box width="100%" sx={{ flexGrow: 1, bgcolor: '#cfe8fc' }}>
        	<TopAppBar></TopAppBar>
			<ChatMain></ChatMain>
		</Box>
      </header>
    </div>
  );
}

export default App;
