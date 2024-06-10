module.exports = function(sequelize, DataTypes) {
    let alias = "Comment";
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

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: "usuario", // Alias del controlador
            foreignKey: "usuario_id"
        });
        Comment.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "producto_id"
        });
    };

    return Comment 
}