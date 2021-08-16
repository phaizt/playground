// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import StudentModel from "models/student";

export default async (req, res) => {
	const { method } = req;
	let response: object;
	let status: number;
	switch (method) {
		case "GET":
			response = await getStudents(req, res);
			status = 200;
			break;
		default:
			response = { message: `Method ${method} Not Allowed` };
			status = 405;
			break;
	}
	res.status(200).json(response);
};

const getStudents = async (req, res) => {

	const attributes = ["id", "email", "name"];

	const students = await StudentModel.findAndCountAll({
		attributes: attributes,
	});

	const response = {
		total: students["count"],
		data: students["rows"],
	};
	return response;
};
