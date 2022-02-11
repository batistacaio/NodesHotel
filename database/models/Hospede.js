module.exports = (sequelize, DataTypes) => {
    const Hospede = sequelize.define("Hospede", {
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
        },
        cpf: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        cep: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        uf: {
            type: DataTypes.STRING(2),
            allowNull: false
        }
    },
    {
        tableName: 'hospedes',
        timestamps: false
    });

    return Hospede;
}