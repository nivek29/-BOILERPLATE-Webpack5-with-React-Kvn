import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Table, Tag, Space } from "antd";

export const ListProd = () => {
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
			name: "@ant-design/icons",

			tags: ["4.6.2"],
		},
		{
			key: "2",
			name: "@material-ui/core",

			tags: ["4.11.4"],
		},
		{
			key: "3",
			name: "antd",

			tags: ["4.15.2"],
		},
		{
			key: "4",
			name: "core-js",

			tags: ["3.10.2"],
		},
		{
			key: "5",
			name: "prop-types",

			tags: ["15.7.2"],
		},
		{
			key: "6",
			name: "react",

			tags: ["17.0.2"],
		},
		{
			key: "7",
			name: "react-dom",

			tags: ["17.0.2"],
		},
		{
			key: "8",
			name: "react-router-dom",

			tags: ["5.2.0"],
		},
		{
			key: "9",
			name: "redux-saga",

			tags: ["1.1.3"],
		},
	];

	return <Table columns={columns} dataSource={data} />;
};
