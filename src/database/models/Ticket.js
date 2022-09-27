module.exports = (sequelize, dataTypes) => {
    const alias = 'Ticket';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: dataTypes.STRING,
            allowNull: false
        },
        type: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        lot: {
            type: dataTypes.STRING,
            allowNull: false
        },
        functions_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        shopping_cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        shopping_cart_users_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }
    
    const config = {
        tableName: 'tickets',
        timestamps: false
    };

    const Ticket = sequelize.define(alias, cols, config);

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Function, {
            as: 'functions',
            foreignKey: 'event_id'
        });
    }

    return Ticket;
};