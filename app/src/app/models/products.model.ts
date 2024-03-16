'use server';

import { DataTypes, Model} from 'sequelize';
import sequelize from "@/app/service/db";


class Product extends Model {
        uuid!: string;
        name!: string;
        discription!: string;
        image!: string;
        discounted_price!: number;
        price!: number;
        is_sale!: boolean;
        created_at!: Date;
        updated_at!: Date;
}

Product.init(
    {
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        discription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        discounted_price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
        },
        is_sale: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
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
		modelName: 'Product',
		tableName: 'products',
		timestamps: true,
		underscored: true,
	},
);

export default  Product;