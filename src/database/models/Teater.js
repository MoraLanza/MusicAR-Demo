module.exports = (sequelize, dataTypes) => {
    const alias = 'Teater';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameTeater: {
            type: dataTypes.STRING,
            allowNull: false
        },
        directionTeater: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
        citys_id: {
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
            foreignKey: 'teaters_id'
        });
    }

    return Teater;
};