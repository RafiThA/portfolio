import { HashRouter, Routes, Route, Navigate } from 'react-router'

import Home from './pages/Home';
import Dev from './pages/Dev';
import PreContact from './pages/PreContact';

import './styles/App.css'

function App() {

	return (
		<HashRouter>
			<Routes>
				
				<Route path="/contact" element={<PreContact />} />
				<Route path="/" element={<Home />} />
				<Route path="/dev" element={<Dev />} />

				{/* Default route handler*/}
				<Route path="*" element={<Navigate to="/" />} />

			</Routes>
		</HashRouter>
	)
}

export default App
