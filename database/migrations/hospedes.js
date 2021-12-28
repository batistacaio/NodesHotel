module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('hospedes', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(75),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(100),
                allowNull: false
            } 
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('hospedes');
    }
}