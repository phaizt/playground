import * as React from "react";
import axios from "helpers/axios";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
	id: string;
	grade: number;
}
interface PropsType {
	formId: string;
	challengeId: string;
    gradeValue: number;
}

const submitHandler = (
	values: Values
	// { setSubmitting }: FormikHelpers<Values>
) => {
	// const data = JSON.stringify(values, null, 2);
	axios.put(`/challenge/${values.id}`, values)
	  .then(function (response) {
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
};

const App: React.FC<PropsType> = (props) => {
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
