
import { BeforeUpdate, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DataTypes, Optional } from "sequelize";

export interface UserResponseItem {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    full_name: string; // last_name + first_name
}

export interface UserAttributes {
    uuid: string;
    last_name: string;
    first_name: string;
    email: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export type UserCreationAttributes = Optional<UserAttributes, "uuid">;

/**
 * User model
 */
@Table({
    modelName: "User",
    tableName: "users",
    timestamps: false
})
export class User extends Model<UserAttributes, UserCreationAttributes> {

    @PrimaryKey
    @Column({
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
    })
        uuid!: string;

    @Column({
        type: DataTypes.STRING(100),
        comment: "Фамилия",
        allowNull: false
    })
        last_name!: string;

    @Column({
        type: DataTypes.STRING(100),
        comment: "Имя",
        allowNull: false
    })
        first_name!: string;

    @Column({
        type: DataTypes.STRING(100),
        comment: "E-mail",
        allowNull: false,
        unique: true
    })
        email!: string;

    @Column({
        type: DataTypes.BOOLEAN,
        comment: "Учетная запись активна?",
        allowNull: false,
        defaultValue: true
    })
        is_active!: boolean;
    
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
    static refreshUpdatedAt(instance: User) {
        instance.updated_at = new Date();
    }
}