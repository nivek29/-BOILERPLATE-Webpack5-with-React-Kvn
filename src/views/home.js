import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/home.scss";
import "antd/dist/antd.css";
import photoReact from "../img/Daco_6126558.png";
import { Button } from "antd";
//import { Antd } from "../components/antd";

export const Home = () => {
	return (
		<Fragment>
			<div className="home">
				<img src={photoReact}></img>
			</div>
			<div className="btn-home">
				<Link to="/dependencies">
					<Button type="primary" shape="round" size="large">
						Dependencies
					</Button>
				</Link>

				<Button type="primary" shape="round" size="large">
					Examples
				</Button>
				<Button type="primary" shape="round" size="large">
					Npm´s
				</Button>
			</div>
		</Fragment>
	);
};
