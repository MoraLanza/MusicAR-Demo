module.exports = (sequelize, dataTypes) => {
    const alias = 'Showtype';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: { 
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    const config = {
        tableName: 'showtypes',
        timestamps: false
    };

    const Showtype = sequelize.define(alias, cols, config);

    // Showtype.associate = (models) => {
    //     Showtype.hasMany(models.Events, {
    //         as: 'events',
    //         foreignKey: 'showtype_id'
    //     });
    // }

    return Showtype;
};