'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            uuid: {
                primaryKey: true,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
                type: Sequelize.DataTypes.UUID
            },
            last_name: {
                type: Sequelize.DataTypes.STRING(100),
                comment: 'Фамилия',
                allowNull: false
            },
            first_name: {
                type: Sequelize.DataTypes.STRING(100),
                comment: 'Имя',
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING(100),
                comment: 'E-mail',
                allowNull: false,
                unique: true
            },
            is_active: {
                type: Sequelize.DataTypes.BOOLEAN,
                comment: 'Учетная запись активна?',
                allowNull: false,
                defaultValue: true
            },
            created_at: {
                type: Sequelize.DataTypes.DATE,
                comment: 'Дата/время создания',
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DataTypes.DATE,
                comment: 'Дата/время изменения',
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
