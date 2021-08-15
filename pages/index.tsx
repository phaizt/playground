import { useRef } from "react";
import Head from "next/head";
import styles from "styles/Home.module.css";
import MaterialTable from "material-table";

import axios from "axios";

export default function Home() {
	const tableRef = useRef<MaterialTable<object>>();

	return (
		<div className={styles.container}>
			<Head>
				<title>Playground</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Head>

			<main className={styles.main}>
				<div style={{ width: "100%" }}>
					<MaterialTable
						title="Refresh Data Preview"
						tableRef={tableRef}
						options={{
							draggable: false,
							actionsColumnIndex: -1,
						}}
						columns={[
							{
								title: "#",
								field: "tableData",
								render: (rowData) => rowData.tableData.id + 1,
							},
							{ title: "Name", field: "name" },
						]}
						data={(query) =>
							new Promise((resolve, reject) => {
								let url = "http://localhost:3000/api/challenge";
								url += `?search=${query.search}&per_page=${
									query.pageSize
								}&page=${query.page + 1}`;
								axios
									.get(url)
									.then(function (response: any) {
										// handle success
										const data = response.data;
										console.log(data);
										resolve({
											data: data.data,
											page: data.page - 1,
											totalCount: data.total,
										});
									})
									.catch(function (error: any) {
										// handle error
										console.log(error);
									})
									.then(function () {
										// always executed
									});
							})
						}
						actions={[
							{
								icon: "refresh",
								tooltip: "Refresh Data",
								isFreeAction: true,
								onClick: () =>
									tableRef.current && (tableRef.current as any).onQueryChange(),
							},
							{
								icon: "save",
								tooltip: "Save User",
								onClick: (event, rowData:any) =>
									alert("You saved " + rowData.name),
							},
							(rowData) => ({
								icon: "delete",
								tooltip: "Delete User",
								field: "name",
								onClick: (event, rowData: any) =>
									confirm("You want to delete " + rowData.name),
							}),
						]}
					/>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
