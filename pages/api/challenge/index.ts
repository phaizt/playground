// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Op } from "sequelize";
import sequelize from "models/index";
import StudentModel from "models/student";
import ChallengeModel from "models/challenge";

export default async (req, res) => {
	const { method } = req;
	let response: object;
	let status: number;
	switch (method) {
		case "GET":
			response = await getChallenge(req, res);
			status = 200;
			break;
		default:
			response = { message: `Method ${method} Not Allowed` };
			status = 405;
			break;
	}
	res.status(200).json(response);
};

const postChallenge = async (req, res) => {
	console.log(req.body);
	return { message: "success" };
};

const getChallenge = async (req, res) => {
	await sequelize
		.authenticate()
		.then(() => {
			StudentModel.hasOne(ChallengeModel, {
				foreignKey: "studentId",
			});

			ChallengeModel.belongsTo(StudentModel, {
				as: "student",
				foreignKey: "studentId",
			});

			StudentModel.hasOne(ChallengeModel, {
				foreignKey: "reviewerId",
			});

			ChallengeModel.belongsTo(StudentModel, {
				as: "reviewer",
				foreignKey: "reviewerId",
			});
		})
		.catch((err: any) => {
			console.log(err);
		});

	const page: number = req.query.page ?? 1;
	const per_page: number = +req.query.per_page || 5;
	const startIndex: number = (page - 1) * per_page;
	const search: string = req.query.search ?? "";

	const attributes = [
		"id",
		"studentId",
		"name",
		"googleDriveFolder",
		"gradingStatus",
		"grade",
		"reviewerId",
	];

	const challenge = await ChallengeModel.findAndCountAll({
		limit: per_page,
		offset: startIndex,
		attributes: attributes,
		where: {
			name: {
				[Op.like]: `%${search}%`,
			},
		},
		include: [
			{ model: StudentModel, as: "student", attributes: ["name"] },
			{ model: StudentModel, as: "reviewer", attributes: ["name"] },
		],
	});

	const response = {
		total: challenge["count"],
		page: page,
		data: challenge["rows"],
	};
	return response;
};
