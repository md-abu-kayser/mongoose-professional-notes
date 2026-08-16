module.exports = function (schema) {
  schema.add({ deletedAt: Date });
  schema.pre("find", function () {
    this.where({ deletedAt: null });
  });
  schema.pre("findOne", function () {
    this.where({ deletedAt: null });
  });
  schema.methods.softDelete = function () {
    this.deletedAt = new Date();
    return this.save();
  };
};
