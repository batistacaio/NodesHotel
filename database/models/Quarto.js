module.exports = (sequelize, DataTypes) => {
    const Quarto = sequelize.define("Quarto", {
        nome: DataTypes.STRING(100),
    },
    {
        tableName: "quartos",
        Timestamps: false
    });

    return Quarto;
}