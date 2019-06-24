const models = require('../models');
const GROUP_NAME = 'shops';
module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      // controller
      const {rows: results, Count: totalCount} = await models.shops.findAndCountAll({
        attributes: [
          'id',
          'name'
        ],
        limit: 2,
        // 分页
        offset: 0
      });
      reply({
        results,
        totalCount
      });
    },
  }
]