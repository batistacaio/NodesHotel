module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define("Reserva", {
        data_entrada: DataTypes.DATE,
        data_saida: DataTypes.DATE,
    },
    {
        tableName: "reservas",
        Timestamps: false
    });

    return Reserva;
}