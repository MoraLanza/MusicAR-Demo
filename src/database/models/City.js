module.exports = (sequelize, dataTypes) => {
    const alias = 'City';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cityName: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        state_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'citys',
        timestamps: false
    };

    const City = sequelize.define(alias, cols, config);

    City.associate = (models) => {
        City.belongsTo(models.State, {
            as: 'states',
            foreignKey: 'state_id'
        }),
        City.hasMany(models.Event, {
            as: 'events',
            foreignKey: 'city_id'
            }),
            City.hasMany(models.User, {
                as: 'users',
                foreignKey: 'city_id'
                })
    }

    return City;
};