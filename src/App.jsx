import './App.css';
import Navigation from './components/partials/Navigation.jsx'
import Footer from './components/partials/Footer.jsx'

function App() {
	return (
		<main className="flex flex-col min-h-screen">
			<Navigation/>
      <div className="bg-amber-500 flex-1">
				<h1>Content</h1>
			</div>
			<Footer/>
		</main>
	);
}

export default App;
