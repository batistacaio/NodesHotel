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
            },
            cpf: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            telefone: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            endereco: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            cep: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cidade: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            uf: {
                type: Sequelize.STRING(2),
                allowNull: false
            } 
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('hospedes');
    }
}