import { useState } from 'react';
import './App.css';
import Navigation from './components/partials/Navigation.jsx';
import Footer from './components/partials/Footer.jsx';
import Sidebar from './components/partials/Sidebar.jsx';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<main className="flex flex-col min-h-screen">
			<Navigation handleButtonClick={() => setSidebarOpen(!sidebarOpen)} />
			<div className="flex-1 relative">
			{sidebarOpen && (
				<Sidebar/>
			)}
				<h1>Content</h1>
			</div>
			<Footer />
		</main>
	);
}

export default App;
