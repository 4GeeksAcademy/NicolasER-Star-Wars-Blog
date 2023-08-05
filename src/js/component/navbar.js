import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img style={{width: "8rem", flex: "none", margin: "10px"}} src={"https://www.freepnglogos.com/uploads/star-wars-logo-design-21.png"}/>
			</Link>
			<div className="ml-auto" style={{flex: "none", margin: "25px", marginLeft: "30px"}}>
				<div className="dropdown"  >
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
					<ul class="dropdown-menu">
    					<li><a class="dropdown-item" href="#">Action</a></li>
					</ul>	
				</div>
			</div>
		</nav>
	);
};
