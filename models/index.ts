import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		dialect: "mysql",
		host: process.env.DB_HOST,
	}
);

export default sequelize;