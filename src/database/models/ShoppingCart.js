module.exports = (sequelize, dataTypes) => {
    const alias = 'ShoppingCart';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
           type: dataTypes.INTEGER,
           allowNull: false
        },
        totalPrice: {
            type: dataTypes.INTEGER,
            allowNull: false
         },
         user_id:{
            type: dataTypes.INTEGER,
            allowNull: false
         }
    };

    const config = {
        tableName: 'shopping_cart',
        timestamps: false
    };

    const ShoppingCart = sequelize.define(alias, cols, config);

    ShoppingCart.associate = (models) => {
        ShoppingCart.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        });
    }

    return ShoppingCart;
};