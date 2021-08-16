import { Op } from "sequelize";
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
	const search: string = req.query.search ?? "";
	
	const students = await StudentModel.findAll({
		limit: 5,
		where: {
			name: {
				[Op.like]: `${search}%`,
			},
		},
		attributes: [
			["id", "value"],
			["name", "label"],
		],
	});

	const response = {
		students,
	};
	return response;
};
