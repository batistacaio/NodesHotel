module.exports = (sequelize, DataTypes) => {
    const Hospede = sequelize.define("Hospede", {
        nome: DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING(100),
    },
    {
        tableName: "hospedes",
        Timestamps: false
    });

    return Hospede;
}