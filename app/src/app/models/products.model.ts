
import { BeforeUpdate, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DataTypes, Optional } from "sequelize";


/**
 * Product model
 */
@Table({
    modelName: "Product",
    tableName: "products",
    underscored: true,
    timestamps: true
})
export class Product extends Model {
    @PrimaryKey
    @Column({
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
    })
        uuid!: string;

    @Column({
        type: DataTypes.STRING(255),
        comment: "Название",
        allowNull: false
    })
        name!: string;

    @Column({
        type: DataTypes.STRING(255),
        comment: "Описание",
        allowNull: true
    })
        discription!: string;
    @Column({
        type: DataTypes.STRING(255),
        comment: "Изображение",
        allowNull: true
    })
        image!: string;
    @Column({
        type: DataTypes.FLOAT,
        comment: "Цена по скидке",
        allowNull: true
    })
        discounted_price!: number;
    @Column({
        type: DataTypes.FLOAT,
        comment: "Цена",
        allowNull: false
    })
        price!: number;
    @Column({
        type: DataTypes.BOOLEAN,
        comment: "Распродажа",
        allowNull: true,
        defaultValue: false
    })
        is_sale!: boolean;
    @Column({
        type: DataTypes.DATE,
        comment: "Создан в",
        allowNull: false,
        defaultValue: DataTypes.NOW
    })
        created_at!: Date;
    @Column({
        type: DataTypes.DATE,
        comment: "Обновлен в",
        allowNull: false,
        defaultValue: DataTypes.NOW
    })
        updated_at!: Date;

    @BeforeUpdate
    static refreshUpdatedAt(instance: Product) {
        instance.updated_at = new Date();
    }
}