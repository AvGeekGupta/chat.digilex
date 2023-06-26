import React from "react";
import Router from "./Router.js";
import MasterLayout from "./layouts/master";
import { ToastContainer } from "react-toastify";
import PreloaderComponent from "./components/preloader";

function App() {
	return (
		<React.Fragment>
			<PreloaderComponent />
			<MasterLayout>
				<Router />
			</MasterLayout>
			<ToastContainer />
		</React.Fragment>
	);
}

export default App;
