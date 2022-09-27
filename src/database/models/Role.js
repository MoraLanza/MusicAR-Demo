module.exports = (sequelize, dataTypes) => {
    const alias = 'Role';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeRole: {
           type: dataTypes.STRING,
           allowNull: false
        }
    };

    const config = {
        tableName: 'roles',
        timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            as: 'users',
            foreignKey: 'role_id'
        });
    }

    return Role;
};