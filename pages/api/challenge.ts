// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	const data = {
		data: [
			{
				name: "lorem",
			},
			{
				name: "ipsum",
			},
		],
        page: 1,
        total:2
	};
	res.status(200).json(data);
};
