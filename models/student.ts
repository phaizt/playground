import { Model, DataTypes, Optional } from "sequelize";
import { Student as StudentAttributes } from "interfaces/student";
import sequelize from "./index";
import ChallengeModel from "models/challenge";

// Some fields are optional when calling StudentModel.create() or StudentModel.build()
interface UserCreationAttributes extends Optional<StudentAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
	extends Model<StudentAttributes, UserCreationAttributes>,
		StudentAttributes {}

const StudentModel = sequelize.define<UserInstance>(
	"students",
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tableName: "students",
	}
);

export default StudentModel;
