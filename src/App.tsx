import { HashRouter, Routes, Route, Navigate } from 'react-router'

import { LanguageProvider } from './lang/Language';

import Profile from "./pages/Profile";
//import Dev from './pages/Dev';

function App() {

	return (
		<LanguageProvider>
			<HashRouter>
				
				<Routes>
					
					<Route path="/profile" element={<Profile />} />
					{/* <Route path="/dev" element={<Dev />} /> */}

					{/* Default route handler*/}
					<Route path="*" element={<Navigate to="/profile" />} />
					

				</Routes>
				
			</HashRouter>
		</LanguageProvider>
	)
}

export default App
