import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        NavBar
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/vodeo/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
