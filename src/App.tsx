import { HashRouter, Routes, Route, Navigate } from 'react-router'

import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ActiveLinks from './components/ActiveLinks';

function App() {

	return (
		<HashRouter>
			<ActiveLinks />
			<Routes>
				
				<Route path="/profile" element={<Profile />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/education" element={<Education />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/contact" element={<Contact />} />

				{/* Default route handler*/}
				<Route path="*" element={<Navigate to="/profile" />} />
				

			</Routes>
		</HashRouter>
	)
}

export default App
