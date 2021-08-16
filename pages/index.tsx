import { useRef, useState } from "react";
import Head from "next/head";
import styles from "styles/Home.module.css";
import MaterialTable from "material-table";

import useGrade from "helpers/useGrade";
import Modal from "components/UI/modal";
import GradeForm from "components/grade/form";

import axios from "helpers/axios";

enum formType {
	GRADE = "grade",
	REVIEWER = "reviewer",
}

export default function Home() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string>();
	const [formId, setFormId] = useState<string>();
	const [challengeId, setChallengeId] = useState<string>();
	const [gradeValue, setGradeValue] = useState<number>();
	const tableRef = useRef<MaterialTable<object>>();
	let form;

	const openModalGradeHandler = (id: string, grade: number) => {
		setGradeValue(grade);
		setFormId(formType.GRADE);
		setModalTitle("Grade Form");
		setShowModal(true);
		setChallengeId(id);
	};

	const openModalReviewerHandler = () => {
		setFormId(formType.REVIEWER);
		setModalTitle("Reviewer Form");
		setShowModal(true);
	};

	const closeModalHandler = () => {
		tableRef.current && (tableRef.current as any).onQueryChange();
		setShowModal(false);
	};

	if (formId === formType.GRADE) {
		form = (
			<GradeForm
				formId={formId}
				challengeId={challengeId}
				gradeValue={gradeValue}
			/>
		);
	} else if (formId === formType.REVIEWER) {
		form = <h1>lorem</h1>;
	}

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
			<Modal
				show={showModal}
				title={modalTitle}
				formId={formId}
				handleClose={closeModalHandler}
				body={form}
			/>

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
								let url = "/challenge";
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
								onClick: (event, rowData: any) => openModalReviewerHandler(),
							},
							(rowData) => ({
								icon: "grade",
								tooltip: "Grade Challenge",
								field: "name",
								onClick: (event, rowData: any) =>
									openModalGradeHandler(rowData.id.toString(), rowData.grade),
							}),
						]}
					/>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
