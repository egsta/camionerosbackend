const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

class CamioneroCamion extends Model {
    static associate(models) {}
}

CamioneroCamion.init({
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: DataTypes.DATE,
}, {
    sequelize,
    timestamps: false,
    tableName: "camionerosCamion",
    modelName: "camioneroCamion",
});

module.exports = CamioneroCamion