import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import TasksList from "./components/tasksList.jsx"

function App()
{
	return (
		<div className="App">
			<h1>ZADANIA DO WYKONANIA</h1>
			<BrowserRouter>
				<Routes>
					<Route path = "/" element = {<TasksList />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
