import { HashRouter, Routes, Route, Navigate } from 'react-router'

import Profile from "./pages/Profile";
//import Dev from './pages/Dev';

function App() {

	return (
		<HashRouter>
			
			<Routes>
				
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="/dev" element={<Dev />} /> */}

				{/* Default route handler*/}
				<Route path="*" element={<Navigate to="/profile" />} />
				

			</Routes>
			
		</HashRouter>
	)
}

export default App
