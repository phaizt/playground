// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Op } from "sequelize";
import ChallengeModel from "models/challenge";

export default async (req, res) => {
	const { method } = req;
	let response: object;
	let status: number;
	switch (method) {
		case "PUT":
			response = await postUpdateReviewer(req, res);
			status = 200;
			break;
		default:
			response = { message: `Method ${method} Not Allowed` };
			status = 405;
			break;
	}
	res.status(200).json(response);
};

const postUpdateReviewer = async (req, res) => {
	const { body, query } = req;
	const challenge = await ChallengeModel.findByPk(query.id);
	if (challenge.grade === null) {
		body.grade = 0;
	}
	challenge.update(body, {
		where: { id: query.id },
	});
	return { message: "success" };
};
