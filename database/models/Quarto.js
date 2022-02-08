module.exports = (sequelize, DataTypes) => {
    const Quarto = sequelize.define("Quarto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        } 
    },
    {
        tableName: 'quarto',
        timestamps: false
    });

    return Quarto;
}