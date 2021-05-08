import { React, Fragment } from "react";
import "../style/dependencies.scss";
import { ListDev } from "../components/list-dev-dep";
import { ListProd } from "../components/list-dev-prod";

export const Dependencies = () => {
	return (
		<Fragment>
			<div className="list-dependencies">
				<p className="parr-dependencies">
					React Boiler-Plate custom , contains the necessary tools for
					development with React. In addition to a set of extra tools
					for unit tests and design components.
				</p>
			</div>
			<div className="list-dependencies-dev">
				<p className="parr-dependencies-dev">Develop dependencies</p>
				<ListDev></ListDev>
			</div>
			<div className="list-dependencies-prod">
				<p className="parr-dependencies-prod">
					Production dependencies
				</p>
				<ListProd></ListProd>
			</div>
		</Fragment>
	);
};
