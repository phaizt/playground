import { NextPage } from "next";
import axios from "helpers/axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { toast } from "react-toastify";

interface Values {
	id: string;
	grade: number;
}
interface PropsType {
	formId: string;
	challengeId: string;
	gradeValue: number;
	afterSubmit: () => void;
}

const App: NextPage<PropsType> = (props) => {
	const submitHandler = (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		setSubmitting(true);

		axios
			.put(`/challenge/${values.id}`, values)
			.then(function (response) {
				toast.success("Update Success");
				props.afterSubmit();
			})
			.catch(function (error) {
				toast.error("Update Failed");
				console.log(error);
			});
		setSubmitting(false);
	};
	return (
		<>
			<Formik
				initialValues={{
					grade: props.gradeValue,
					id: props.challengeId,
				}}
				onSubmit={submitHandler}
			>
				<Form className="form-horizontal" id={props.formId}>
					<label htmlFor="firstName">Grade</label>
					<Field as="select" name="grade" className="form-control" required="">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</Field>
				</Form>
			</Formik>
		</>
	);
};

export default App;
