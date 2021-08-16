export enum GradeStatus {
	UNSUBMITTED = "UNSUBMITTED",
	SUBMITTED = "SUBMITTED",
	GRADE_PASSED = "GRADE_PASSED",
	GRADE_FAILED = "GRADE_FAILED",
}

export interface Challenge {
	id: string;
	studentId: string;
	name: string;
	googleDriveFolder?: string;
	gradingStatus: "UNSUBMITTED" | "SUBMITTED" | "GRADE_PASSED" | "GRADE_FAILED";
	grade: number;
	reviewerId: string;
}
