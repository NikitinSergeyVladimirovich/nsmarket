'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
            uuid: {
                primaryKey: true,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
                type: Sequelize.DataTypes.UUID
            },
            name: {
                type: Sequelize.DataTypes.STRING(255),
                comment: 'Навзание',
                allowNull: false
            },
            discription: {
                type: Sequelize.DataTypes.STRING(255),
                comment: 'Описание',
                allowNull: true
            },
            discounted_price: {
                type: Sequelize.DataTypes.FLOAT,
                comment: 'Скидачная цена',
                allowNull: true
            },
            price: {
                type: Sequelize.DataTypes.FLOAT,
                comment: 'Цена',
                allowNull: false
            },
            image: {
                type: Sequelize.DataTypes.STRING(255),
                comment: 'Изображение',
                allowNull: true,
            },
            is_sale: {
                type: Sequelize.DataTypes.BOOLEAN,
                comment: 'Распродажа ?',
                allowNull: false,
                defaultValue: false
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
