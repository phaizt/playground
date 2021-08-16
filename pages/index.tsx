import { useRef, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import styles from "styles/Home.module.css";
import MaterialTable from "material-table";

import useGrade from "helpers/useGrade";
import Modal from "components/UI/modal";
import GradeForm from "components/grade/form";
import ReviewerForm from "components/reviewer/form";
import { Student as StudentType } from "interfaces/student";

import axios from "helpers/axios";

enum formType {
	GRADE = "grade",
	REVIEWER = "reviewer",
}

interface PropsType {
	students: StudentType[];
}

export const getStaticProps = async () => {
	const students = await axios.get("/reviewer/");
	return {
		props: {
			students: students.data.data,
		},
	};
};

const Homepage: NextPage<PropsType> = (props) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string>();
	const [formId, setFormId] = useState<string>();
	const [challengeId, setChallengeId] = useState<string>();
	const [gradeValue, setGradeValue] = useState<number>();
	const [reviewerId, setReviewerId] = useState<string>();
	const tableRef = useRef<MaterialTable<object>>();
	let form;

	const openModalGradeHandler = (id: string, grade: number) => {
		setFormId(formType.GRADE);
		setGradeValue(grade);
		setChallengeId(id);
		setModalTitle("Grade Form");
		setShowModal(true);
	};

	const openModalReviewerHandler = (id: string, reviewer: string) => {
		setFormId(formType.REVIEWER);
		setReviewerId(reviewer);
		setChallengeId(id);
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
				afterSubmit={closeModalHandler}
			/>
		);
	} else if (formId === formType.REVIEWER) {
		form = (
			<ReviewerForm
				students={props.students}
				formId={formId}
				challengeId={challengeId}
				reviewerId={reviewerId}
				afterSubmit={closeModalHandler}
			/>
		);
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
								onClick: (event, rowData: any) =>
									openModalReviewerHandler(
										rowData.id.toString(),
										rowData.reviewerId.toString()
									),
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
};

export default Homepage;
