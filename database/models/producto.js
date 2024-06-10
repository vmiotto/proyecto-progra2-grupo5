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
        nombreProducto: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
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
            as: "productos",
            foreignKey: "producto_id"
        })
    }

    return Producto
}