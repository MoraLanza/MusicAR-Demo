module.exports = (sequelize, dataTypes) => {
    const alias = 'Teater';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        direction: {
            type: dataTypes.STRING,
            allowNull: false
        },
        linkMaps: {
            type: dataTypes.TEXT,
            allowNull: false
         },
         teaterImage: {
            type: dataTypes.TEXT,
            allowNull: false
         },
        city_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
    }
    
    const config = {
        tableName: 'teaters',
        timestamps: false
    };

    const Teater = sequelize.define(alias, cols, config);

    Teater.associate = (models) => {
        Teater.hasMany(models.Event, {
            as: 'events',
            foreignKey: 'teater_id'
        }),

        Teater.belongsTo(models.City, {
            as: 'citys',
            foreignKey: 'city_id'
        });
    }

    return Teater;
};