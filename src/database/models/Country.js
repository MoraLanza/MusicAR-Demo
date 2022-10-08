module.exports = (sequelize, dataTypes) => {
    const alias = 'Country';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        countryName: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    const config = {
        tableName: 'countrys',
        timestamps: false
    };

    const Country = sequelize.define(alias, cols, config);

    Country.associate = (models) => {
        Country.hasMany(models.State, {
            as: 'states',
            foreignKey: 'country_id'
        }),

        Country.hasMany(models.Event, {
            as: 'events',
            foreignKey: 'country_id'
            })
    }

    return Country;
};