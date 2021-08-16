import { NextPage } from "next";
import axios from "helpers/axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Student as StudentType } from "interfaces/student";

interface Values {
	id: string;
	reviewerId: string;
}
interface PropsType {
	formId: string;
	challengeId: string;
	reviewerId: string;
	students: StudentType[];
	afterSubmit: () => void;
}

const App: NextPage<PropsType> = (props) => {
	const submitHandler = (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		setSubmitting(true);
		axios
			.put(`/reviewer/${values.id}`, values)
			.then(function (response) {
				props.afterSubmit();
			})
			.catch(function (error) {
				console.log(error);
			});
		setSubmitting(false);
	};

	let options = props.students.map((student) => (
		<option value={student.id} key={student.id}>
			{student.name}
		</option>
	));
	return (
		<>
			<Formik
				initialValues={{
					reviewerId: props.reviewerId,
					id: props.challengeId,
				}}
				onSubmit={submitHandler}
			>
				<Form className="form-horizontal" id={props.formId}>
					<label htmlFor="firstName">Reviewer</label>
					<Field
						as="select"
						name="reviewerId"
						className="form-control"
						required=""
					>
						{options}
					</Field>
				</Form>
			</Formik>
		</>
	);
};

export default App;
