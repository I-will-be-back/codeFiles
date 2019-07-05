const Sequelize = require('sequelize');

const sequelize = new Sequelize('geektime', 'root', '123456', {
  // 数据库类型，支持: 'mysql', 'sqlite', 'postgres', 'mssql'
  dialect: 'mysql',
  // 自定义链接地址，可以是ip或者域名，默认本机：localhost
  // host: 'my.server.tld',
  host: 'localhost',
  // 自定义端口，默认3306
  port: 3306,
  // operatorsAliases: false,
  // postgres使用的参数,连接类型，默认：tcp
  // protocol: null,
  // 是否开始日志，默认是用console.log
  // 建议开启，方便对照生成的sql语句
  // logging: true,
  // 默认是空
  // 支持: 'mysql', 'postgres', 'mssql'
  // dialectOptions: {
  //   // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  //   charset: "utf8mb4",
  //   collate: "utf8mb4_unicode_ci",
  //   supportBigNumbers: true,
  //   bigNumberStrings: true
  // },
  // sqlite的存储位置,仅sqlite有用
  // - 默认 ':memory:'
  // storage: 'path/to/database.sqlite',

  // 是否将undefined转化为NULL
  // - 默认: false
  // omitNull: true,
  // pg中开启ssl支持
  // - 默认: false
  // native: true,
  // 数据库默认参数,全局参数
  // define: {
  //   underscored: false,
  //   freezeTableName: false,
  //   charset: 'utf8',
  //   dialectOptions: {
  //     collate: 'utf8_general_ci'
  //   },
  //   timestamps: true
  // },
  // 是否同步
  // sync: { force: true },
  // 连接池配置
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
    // acquire: 60000,
  },
  // timezone: "+08:00"
  // isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ
})

module.exports = { sequelize };