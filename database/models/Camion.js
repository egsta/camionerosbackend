const sequelize = require("../sequelize");
const { Model, DataTypes } = require("sequelize");

class Camion extends Model {
    static associate(models) {
        Camion.belongsToMany(models.Camionero, { through: models.CamioneroCamion, foreignKey: 'camionMatricula', as: 'camioneros' });
    }
}
Camion.init({
    matricula: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        primaryKey: true,
    },
    modelo: DataTypes.STRING(30),
    tipo: DataTypes.STRING(13),
    potencia: DataTypes.INTEGER(5),
}, {
    sequelize,
    modelName: "camion",
    tableName: "camiones",
});
//Camion.associate(Camionero)

module.exports = Camion;