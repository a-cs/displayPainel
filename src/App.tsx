import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home/home';
import Painel from './pages/painel/painel';

function App() {
  return (
    <Router>
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/painel' element={<Painel/>} />
		</Routes>
	</Router>
  );
}

export default App;
