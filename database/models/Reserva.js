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
        },
        suite_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        total_hospedes: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        hospede1_titular: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        hospede_2: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        hospede_3: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        hospede_4: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    },
    {   
        tableName: 'reservas',
        timestamps: false
    });

    return Reserva;
}