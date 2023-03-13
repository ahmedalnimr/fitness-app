import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import UserRegister from './views/UserRegister';
import UserService from './services/user';
import { Container } from 'react-bootstrap';

function App() {
	// Events retrieval and refresh
	const userService = new UserService() ;

  return (
    <>
		<Container className="my-container">
			<main>
				<Routes>
					<Route path="/register" element={
						<UserRegister userService={userService} />
					} />
				</Routes>
			</main>
			</Container>
		</>
  );
}

export default App;
