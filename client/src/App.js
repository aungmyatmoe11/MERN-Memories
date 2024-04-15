import { BrowserRouter, Switch, Route } from "react-router-dom";

// ! Components
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

// ! material
import Container from "@mui/material/Container";

function App() {
  return (
    <BrowserRouter>
			<Container max="true" width="lg">
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/auth" exact component={Auth} />
				</Switch>
			</Container>
		</BrowserRouter>
  );
}

export default App;
