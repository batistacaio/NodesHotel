module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('quartos', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            } 
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('quartos');
    }
}