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
        function_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        event_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    
    const config = {
        tableName: 'tickets',
        timestamps: false
    };

    const Ticket = sequelize.define(alias, cols, config);

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Function, {
            as: 'functions',
            foreignKey: 'function_id'
        })
    }
    

    return Ticket;
};