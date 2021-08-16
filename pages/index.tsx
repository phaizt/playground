import { useRef, useState } from "react";
import Head from "next/head";
import styles from "styles/Home.module.css";
import MaterialTable from "material-table";
import useGrade from "helpers/useGrade";
import Modal from "components/UI/modal";

import axios from "axios";

export default function Home() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string>();
	const tableRef = useRef<MaterialTable<object>>();

	const openModalHandler = (title:string) => {
		setModalTitle(title);
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

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
			<Modal show={showModal} title={modalTitle} handleClose={closeModalHandler} body={<h1>asda</h1>}/>
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
							{ title: "Id", field: "id" },
							{ title: "Challenge", field: "name" },
							{
								title: "Student",
								field: "student",
								render: (rowData) => rowData.student.name,
							},
							{ title: "GDrive", field: "googleDriveFolder" },
							{ title: "Grade", field: "grade" },
							{
								title: "Status",
								field: "grade",
								render: (rowData) => useGrade(rowData.grade),
							},

							{
								title: "Reviewer",
								field: "reviewer",
								render: (rowData) => rowData.reviewer?.name,
							},
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
								icon: "manage_accounts",
								tooltip: "Set Reviewer",
								onClick: (event, rowData: any) => openModalHandler("Change Reviewer"),
							},
							(rowData) => ({
								icon: "grade",
								tooltip: "Grade Challenge",
								field: "name",
								onClick: (event, rowData: any) => openModalHandler("Grade Challenge"),
							}),
						]}
					/>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
