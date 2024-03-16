'use server';

import { DataTypes, Model, Op } from 'sequelize';
import sequelize from "@/app/service/db";

class User extends Model {
	public uuid!: string;
	public email!: string;
	public firstName!: string;
	public lastName!: string;
	public createdAt!: string;
	public updatedAt!: string;
	public is_active!: boolean;
}

User.init(
	{
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false,
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'users',
		timestamps: true,
		underscored: true,
	},
);

export default User;