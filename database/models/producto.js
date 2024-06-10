module.exports = function(sequelize, DataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        imagen: {
            type: DataTypes.STRING
        },
        nombre_producto: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: "productos", 
        timestamps: true,
        underscored: true 
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuarios", 
            foreignKey: "usuario_id"
        })
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "producto_id"
        })
    }

    return Producto
}