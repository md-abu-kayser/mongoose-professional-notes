# Virtual Populate

Define virtual that references another collection, then `populate` it.

```js
userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});
```
