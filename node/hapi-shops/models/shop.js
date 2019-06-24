// mvc model
// mysql里面的数据 row => object
// orm sequelize
module.exports = (sequelize, DataTypes) => sequelize.define(
  'shops',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thumb_url: DataTypes.STRING
  },
  {
    tableName: 'shops'
  }
)