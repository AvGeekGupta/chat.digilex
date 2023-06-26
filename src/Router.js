import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ErrorPage = React.lazy(() => import("./pages/404"));
const ChatAppPage = React.lazy(() => import("./pages/chat-app"));

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<ChatAppPage />} />
				
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
