import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./styles.scss";
import { Button, Container } from "react-bootstrap";

function NavbarComponent() {
	return (
		<React.Fragment>
			<Navbar fixed="top" collapseOnSelect expand="md" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<img
							alt="logo"
							src={process.env.PUBLIC_URL + "/images/logo.png"}
							height="30"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link href="https://digilex.biz/services" target="blank">Services</Nav.Link>
							<Nav.Link href="https://digilex.biz/pricing">Pricing</Nav.Link>
							<Nav.Link href="https://digilex.biz/about-us">About Us</Nav.Link>
							<Nav.Link href="https://digilex.biz/contact-us">Contact Us</Nav.Link>
							<Button
								href="https://digilex.biz/login"
								variant="success"
								className="mx-1 my-sm-0 my-2 button">
								Login
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default NavbarComponent;
