import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Table, Tag, Space } from "antd";

export const ListDev = () => {
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Version",
			key: "tags",
			dataIndex: "tags",
			// eslint-disable-next-line react/display-name
			render: (tags) => (
				<>
					{tags.map((tag) => {
						return (
							<Tag color="green" key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
	];
	const data = [
		{
			key: "1",
			name: "@babel/core",

			tags: ["7.13.15"],
		},
		{
			key: "2",
			name: "@babel/preset-env",

			tags: ["7.13.15"],
		},
		{
			key: "3",
			name: "@babel/preset-react",

			tags: ["7.13.13"],
		},
		{
			key: "4",
			name: "@pmmmwh/react-refresh-webpack-plugin",

			tags: ["0.4.3"],
		},
		{
			key: "5",
			name: "@types/jest",

			tags: ["26.0.23"],
		},
		{
			key: "6",
			name: "@wojtekmaj/enzyme-adapter-react-17",

			tags: ["0.6.1"],
		},
		{
			key: "7",
			name: "babel-eslint",

			tags: ["10.1.0"],
		},
		{
			key: "8",
			name: "babel-jest",

			tags: ["26.6.3"],
		},
		{
			key: "9",
			name: "babel-loader",

			tags: ["8.2.2"],
		},
		{
			key: "10",
			name: "bc-console",

			tags: ["0.0.2"],
		},
		{
			key: "11",
			name: "clean-webpack-plugin",

			tags: ["3.0.0"],
		},
		{
			key: "12",
			name: "css-loader",

			tags: ["5.2.4"],
		},
		{
			key: "13",
			name: "enzyme",

			tags: ["3.11.0"],
		},
		{
			key: "14",
			name: "eslint",

			tags: ["7.25.0"],
		},
		{
			key: "15",
			name: "eslint-loader",

			tags: ["4.0.2"],
		},
		{
			key: "16",
			name: "eslint-plugin-react",

			tags: ["7.23.2"],
		},
		{
			key: "17",
			name: "eslint-watch",

			tags: ["7.0.0"],
		},
		{
			key: "18",
			name: "file-loader",

			tags: ["6.2.0"],
		},
		{
			key: "19",
			name: "jest",

			tags: ["26.6.3"],
		},
		{
			key: "20",
			name: "jest-enzyme",

			tags: ["7.1.2"],
		},
		{
			key: "21",
			name: "mini-css-extract-plugin",

			tags: ["1.5.0"],
		},
		{
			key: "22",
			name: "prettier",

			tags: ["2.2.1"],
		},
		{
			key: "23",
			name: "prettier-webpack-plugin",

			tags: ["1.2.0"],
		},
		{
			key: "24",
			name: "react-query",

			tags: ["3.13.11"],
		},
		{
			key: "25",
			name: "react-refresh",

			tags: ["0.10.0"],
		},
		{
			key: "26",
			name: "sass",

			tags: ["1.32.11"],
		},
		{
			key: "27",
			name: "sass-loader",

			tags: ["11.0.1"],
		},
		{
			key: "28",
			name: "style-loader",

			tags: ["2.0.0"],
		},
		{
			key: "29",
			name: "webpack",

			tags: ["5.34.0"],
		},
		{
			key: "30",
			name: "webpack-cli",

			tags: ["4.6.0"],
		},
		{
			key: "31",
			name: "webpack-dev-server",

			tags: ["3.11.2"],
		},
		{
			key: "32",
			name: "webpack-merge",

			tags: ["5.7.3"],
		},
		{
			key: "33",
			name: "html-webpack-plugin",

			tags: ["5.3.1"],
		},
	];

	return <Table columns={columns} dataSource={data} />;
};
