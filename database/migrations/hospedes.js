module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('hospedes', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(75),
                allowNull: false
            },
            senha: {
                type: Sequelize.STRING(100),
                allowNull: false
            } 
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('hospedes');
    }
}