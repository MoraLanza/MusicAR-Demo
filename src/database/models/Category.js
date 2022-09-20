module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING
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
        });
    }

    return Category;
};
