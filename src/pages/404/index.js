import { React } from "react";
import "./styles.scss";
import { Button } from "react-bootstrap";

function ErrorPage() {
	return (
		<div className="error">
			<h1>404</h1>
			<h2>Page Not Found</h2>
            <p>
                You are not supposed to be here.
            </p>
            <Button variant="success" className="button" href="/">
                Go Home
            </Button>
		</div>
	);
}

export default ErrorPage;
