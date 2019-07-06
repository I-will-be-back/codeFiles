module.exports = function (sequelize, DataTypes) {
  return sequelize.define('shop', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
    },
    // 商品名
		title: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 描述
    dec: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 商品图片
    image: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 商品价格
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
	}, {
		freezeTableName: true
	})
}