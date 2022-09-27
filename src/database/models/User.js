module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        roles_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        citys_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        imageUser: {
            type: dataTypes.BLOB,
            allowNull: false
        }
    }
    
    const config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.City, {
            as: 'citys',
            foreignKey: 'citys_id'
        }),

        User.belongsTo(models.Role, {
            as: 'roles',
            foreignKey: 'role_id'
        });
    }

    return User;
}