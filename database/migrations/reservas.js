module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('reservas', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true           
            },
            data_entrada: {
                type: DataTypes.DATE,
                allowNull: false
            },
            data_saida: {
                type: DataTypes.DATE,
                allowNull: false
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('reservas');
    }
}