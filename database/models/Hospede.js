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
        }
    },
    {
        timestamps: false
    });

    return Hospede;
}