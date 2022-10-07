module.exports = (sequelize, dataTypes) => {
   const alias = 'Event';

   const cols = {
      id: {
         type: dataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      artist: {
         type: dataTypes.STRING,
         allowNull: false
      },
      subtitle: {
         type: dataTypes.STRING,
         allowNull: false
      },
      description: {
         type: dataTypes.TEXT,
         allowNull: false
      },
      linkYoutube: {
         type: dataTypes.TEXT,
         allowNull: false
      },
      imageEvent: {
         type: dataTypes.TEXT,
         allowNull: false
      },
      category_id: {
         type: dataTypes.INTEGER,
         allowNull: false
      },
      teater_id: {
         type: dataTypes.INTEGER,
         allowNull: false
      },
      city_id: {
         type: dataTypes.INTEGER,
         allowNull: false
      },
      country_id: {
         type: dataTypes.INTEGER,
         allowNull: false
      },
      state_id: {
         type: dataTypes.INTEGER,
         allowNull: false
      },
      showtype_id: {
         type: dataTypes.INTEGER,
         allowNull: false
      },

   };

   const config = {
      tableName: 'events',
      timestamps: false
   };

   const Event = sequelize.define(alias, cols, config);

   Event.associate = (models) => {
      Event.belongsTo(models.Category, {
         as: 'categories',
         foreignKey: 'category_id'
      }),
         Event.belongsTo(models.Teater, {
            as: 'teaters',
            foreignKey: 'teater_id'
         }),
         Event.belongsTo(models.City, {
            as: 'citys',
            foreignKey: 'city_id'
         }),
         Event.belongsTo(models.State, {
            as: 'states',
            foreignKey: 'state_id'
         }),
         Event.belongsTo(models.Country, {
            as: 'countrys',
            foreignKey: 'country_id'
        }),
        Event.belongsTo(models.Showtype, {
         as: 'showtypes',
         foreignKey: 'showtype_id'
     })
    };

   return Event;
};