const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('top', {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 标题
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 图片1
        image1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 图片2
        image2: {
          type: DataTypes.STRING,
          allowNull: true,
      },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        freezeTableName: true
    })
}