module.exports = (sequelize, DataTypes) => {

    let cliente = sequelize.define(
        "Cliente", // Nome do model
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "clientes",
            timestamps: false,
            paranoid: true
        }
    );
    

    return cliente;

}