module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('quartos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false
            } 
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('quartos');
    }
}