import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Dependencies } from "./views/dependencies";

export const Layout = () => {
	return (
		<div className="d-flex flex-column">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/dependencies">
						<Dependencies />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
