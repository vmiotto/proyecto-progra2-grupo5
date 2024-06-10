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
    };
    let config = {
        tableName: "comentarios", 
        timestamps: true,
        underscored: true 
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.usuario, {
            as: "usuarios", 
            foreignKey: "usuario_id"
        });
        Comentario.belongsTo(models.producto, {
            as: "productos",
            foreignKey: "producto_id"
        });
    };

    return Comentario 
}