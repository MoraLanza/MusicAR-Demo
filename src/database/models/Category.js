module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
           type: dataTypes.STRING,
           allowNull: false
        }
    };

    const config = {
        tableName: 'categories',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.Event, {
            as: 'events',
            foreignKey: 'category_id'
        }),
        Category.hasMany(models.User, {
            as: 'users',
            foreignKey: 'category_id'
        })
    }

    return Category;
};
