module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type:dataTypes.STRING
        }
    }

    let config = {
        tableName : "usuarios",
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
            as: "productos", //Alias del 
            foreignKey: "usuario_id"
        }),
        Usuario.hasMany(models.Comentario, {
            as: "comentarios", //Alias 
            foreignKey: "usuario_id"
        })
    }

    return Usuario;

}