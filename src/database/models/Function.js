module.exports = (sequelize, dataTypes) => {
    const alias = 'Function';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
         },
         time: {
            type: dataTypes.TIME,
            allowNull: false
         },
         durationTime: {
            type: dataTypes.TIME,
            allowNull: false
         },
         event_id: {
            type: dataTypes.INTEGER,
            allowNull: false
         }
    };

    const config = {
        tableName: 'functions',
        timestamps: false
    };

    const Function = sequelize.define(alias, cols, config);

    Function.associate = (models) => {
        Function.belongsTo(models.Event, {
            as: 'events',
            foreignKey: 'event_id'
        })
    };

    return Function;
};