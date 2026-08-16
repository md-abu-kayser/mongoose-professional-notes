module.exports = function (schema) {
  schema.statics.paginate = async function (filter, options) {
    const { page = 1, limit = 10 } = options;
    const total = await this.countDocuments(filter);
    const data = await this.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);
    return { data, total, page, pages: Math.ceil(total / limit) };
  };
};
