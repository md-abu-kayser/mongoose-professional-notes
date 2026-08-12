# Creating & Using Plugins

```js
module.exports = function (schema) {
  schema.pre("save", function (next) {
    this.updatedAt = new Date();
    next();
  });
};
// Usage: schema.plugin(timestampPlugin);
```
