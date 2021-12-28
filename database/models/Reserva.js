module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define("Reserva", {
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
    },
    {
        timestamps: false
    });

    return Reserva;
}