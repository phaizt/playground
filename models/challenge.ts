import { Model, DataTypes, Optional } from "sequelize";
import { Challenge as ChallengeAttributes } from "interfaces/challenge";
import sequelize from ".";
import StudentModel from "models/student";

// Some fields are optional when calling ChallengeModel.create() or ChallengeModel.build()
interface UserCreationAttributes extends Optional<ChallengeAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
	extends Model<ChallengeAttributes, UserCreationAttributes>,
		ChallengeAttributes {}

const ChallengeModel = sequelize.define<UserInstance>(
	"challenges",
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: false,
		},
		studentId: {
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		googleDriveFolder: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		gradingStatus: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		grade: {
			type: DataTypes.TINYINT,
			allowNull: true,
		},
		reviewerId: {
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: true,
		},
	},
	{
		timestamps: false,
		tableName: "challenges",
	}
);

export default ChallengeModel;
