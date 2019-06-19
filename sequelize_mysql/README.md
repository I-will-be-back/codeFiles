- sequelize 脚手架
  mysql2 数据驱动
  sequelize orm 工具 table -> object
  对底层的sql API 化 model
  sequelize-cli 命令行工具

- config
  数据库配置文件
  - ./node_modules/.bin/sequelize init 初始化构建目录
  - ./node_modules/.bin/sequelize db:create 创建数据库
  - ./node_modules/.bin/sequelize migration:create --name create-shops-table 创建迁移文件并且建表或修改表
  - ./node_modules/.bin/sequelize db:migrate 执行迁移
  - ./node_modules/.bin/sequelize db:migrate:undo 回退迁移
  - ./node_modules/.bin/sequelize seed:create --name init-shops 初始化项目数据