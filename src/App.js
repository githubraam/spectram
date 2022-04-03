import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import './App.css'
import Frontpage from './components/frontpage/Frontpage';
import Footer from './common/Footer';
import { GlobalContext } from './context/Globalcontext';
import { useState } from 'react';
import Loading from './common/Loading';
import Lab from './components/Lab';
import Scan from './components/Scan';
import {
	BrowserRouter as Router, Routes,
	Route,
	Link
  } from "react-router-dom";
function App() {
	const [isLoading, setIsLoading] = useState(false);
	const  [headerHeight, setHeaderHeight] = useState('0')
	return (
		<>
		<GlobalContext.Provider value={{isLoading, setIsLoading, headerHeight, setHeaderHeight}}>
			<Router>
			{isLoading && <Loading/>}
			<Header />
				<Routes>
					<>
					<Route exact path="/" element={<Frontpage />} />
					<Route path="/lab" element={<Lab />} />
					<Route path="/scan" element={<Scan />} />

					</>
					
				</Routes>
			<Footer />
			</Router>
		</GlobalContext.Provider>
		</>
	)
}

export default App;
