
import { BeforeUpdate, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DataTypes, Optional } from "sequelize";

export interface SpecificationResponseItem {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    full_name: string; // last_name + first_name
}

export interface SpecificationAttributes {
    uuid: string;
    name: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export type SpecificationCreationAttributes = Optional<SpecificationAttributes, "uuid">;

/**
 * Specification model
 */
@Table({
    modelName: "Specification",
    tableName: "specifications",
    timestamps: false
})
export class Specification extends Model<SpecificationAttributes, SpecificationCreationAttributes> {

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
        comment: "Значение",
        allowNull: true
    })
        value!: string;
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
    static refreshUpdatedAt(instance: Specification) {
        instance.updated_at = new Date();
    }
}