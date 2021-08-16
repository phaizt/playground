import { useState } from "react";
import { NextPage } from "next";
import axios from "helpers/axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import AsyncSelect from "react-select/async";
import { toast } from "react-toastify";
import { ReviewerID } from "interfaces/reviewer";

interface Values {
	id: string;
	reviewerId: ReviewerID;
}
interface PropsType {
	formId: string;
	challengeId: string;
	reviewerId: ReviewerID;
	afterSubmit: () => void;
}

const promiseOptions = async (inputValue) => {
	const option = await axios.get(`/reviewer?search=${inputValue}`);
	return option.data.students;
};

const App: NextPage<PropsType> = (props) => {
	const [reviewerId, setReviewerId] = useState<ReviewerID>(props.reviewerId);

	const handleChange = async (selectedOptions: ReviewerID) => {
		await setReviewerId(selectedOptions);
	};
	const submitHandler = (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		setSubmitting(true);
		if (reviewerId.value.toString().trim() === "") {
			toast.warning("Please Select the reviewer");
		} else {
			axios
				.put(`/reviewer/${values.id}`, { reviewerId: reviewerId.value })
				.then(function (response) {
					toast.success("Update Success");
					props.afterSubmit();
				})
				.catch(function (error) {
					toast.error("Update Failed");
					console.log(error);
				});
		}
		setSubmitting(false);
	};
	return (
		<>
			<Formik
				initialValues={{
					reviewerId: reviewerId,
					id: props.challengeId,
				}}
				onSubmit={submitHandler}
			>
				<Form className="form-horizontal" id={props.formId}>
					<label htmlFor="firstName">Reviewer</label>
					<AsyncSelect
						cacheOptions
						defaultOptions
						loadOptions={promiseOptions}
						value={reviewerId}
						onChange={handleChange}
						required=""
					/>
				</Form>
			</Formik>
		</>
	);
};

export default App;
