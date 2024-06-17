module.exports = function(sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        usuario_id: {
            type: DataTypes.INTEGER
        },
        producto_id: {
            type: DataTypes.INTEGER
        },
        comentario: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "comentarios", 
        timestamps: true,
        underscored: true 
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuarios", 
            foreignKey: "usuario_id"
        });
        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "producto_id"
        });
    };

    return Comentario 
}