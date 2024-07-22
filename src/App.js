import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './Pages/Article/Article';
import ArticleDetail from './Pages/Article/ArticleDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Article />} />
          <Route path="/post/:slug" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
