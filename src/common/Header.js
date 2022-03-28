import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import axios from "axios";
import { GlobalContext } from "../context/Globalcontext";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
	let headeroffset = '0';
	const [isSticky, setIsSticky] = useState(false);
	const [currentOffset, setCurrentOffset] = useState(0);
	const [topneagative, settopneagative] = useState(headeroffset);
	const [menuitem, setmenuitem] = useState({});
	const {isLoading, setIsLoading} = useContext(GlobalContext);

	let topHeaderHeight;

	useEffect(()=>{
		topHeaderHeight = document.querySelector('.topHeader').clientHeight + 'px';
		
		isSticky ? settopneagative('-'+topHeaderHeight) : settopneagative(headeroffset)
	
	},[isSticky]);





	useEffect(()=>{
		
		window.addEventListener("scroll", scrollEvent);

		axios.get(process.env.REACT_APP_WP_URL_JSON+'wp/v2/menu')
		.then((response)=>{

			setmenuitem(response.data);
			setIsLoading(false)

		})
		.catch((error)=>{
			console.log(error);
			alert('Please make sure that WP is running');
		})


	},[])

	const scrollEvent = () =>{
		
		const topOffset = window.scrollY;
		if(topOffset>currentOffset){
			setIsSticky(true);
		}
		else{
			setIsSticky(false);
		}
	}

	const headerstyle = {
		'top': topneagative,
	}
	return(
		<Container as="header" fluid className={`p-0 header ${isSticky ? "fixedHeader" : ""}`} style={headerstyle} >
			<Container fluid className="topHeader d-flex justify-content-end">
				<Nav.Link href="#link" className="covid">Covid-19 info</Nav.Link>
			</Container>
			<Container>
				<Navbar expand="lg">
					<Navbar.Brand  as={Link} to="/" >
						<img src="assets/images/logo.png" className="img-fluid custom-logo" alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav as="ul" className="ms-auto">
							{menuitem.length ? 
								menuitem.map((menu)=>{
									return (<li className="menu-item" key={menu.ID}>
										<Nav.Link as={Link} to={menu.url.replace(process.env.REACT_APP_WP_SITE,'')}>{menu.title}</Nav.Link>
									</li>)
								})
							 : '' } 
							{/* <li className="menu-item">
								<Nav.Link as={Link} to="/">Home</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link as={Link} to="/lab">Lab</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link as={Link} to="/scan">Scan</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link as={Link} to="/film">Film</Nav.Link>								
							</li>
							<li className="menu-item">
								<Nav.Link as={Link} to="/camera">Cameras</Nav.Link>
							</li>
							<li>
								<NavDropdown title="Products" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown>
							</li>
							<li>
								<Nav.Link href="#link">Contact</Nav.Link>
							</li> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</Container>
	);
};

export default Header;
