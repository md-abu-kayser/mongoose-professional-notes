# Virtuals

Computed properties not stored in MongoDB.

```js
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```
