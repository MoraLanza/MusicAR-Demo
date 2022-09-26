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
        state_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'states',
        timestamps: false
    };

    const States = sequelize.define(alias, cols, config);

    State.associate = (models) => {
        State.belongsTo(models.State, {
            as: 'city',
            foreignKey: 'city_id'
        });
    }

    return State;
};