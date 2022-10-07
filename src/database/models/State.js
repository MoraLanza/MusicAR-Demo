module.exports = (sequelize, dataTypes) => {
    const alias = 'State';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stateName: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        country_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'states',
        timestamps: false
    };

    const State = sequelize.define(alias, cols, config);

    State.associate = (models) => {
        State.belongsTo(models.Country, {
            as: 'country',
            foreignKey: 'country_id'
        }),
        State.hasMany(models.Event, {
            as: 'events',
            foreignKey: 'state_id'
            })
    }

    return State;
};