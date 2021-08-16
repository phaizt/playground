import { GradeStatus } from "interfaces/challenge";
const useGrade = (grade?: number) => {
	let status = GradeStatus.SUBMITTED;
	if (grade >= 1 && grade <= 4) {
		status = GradeStatus.GRADE_PASSED;
	} else if (grade >= 5) {
		status = GradeStatus.GRADE_FAILED;
	} else if (grade === null) {
		status = GradeStatus.UNSUBMITTED;
	}
	return status;
};
export default useGrade;
