import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import BrowseCharacters from './BrowseCharacters';
import CharacterDetail from './CharacterDetail';
import Comics from './Comics.jsx';
import CharacterList from './BrowseCharacters';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-characters" element={<BrowseCharacters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<CharacterList />} /> {}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
