# Query Basics

```js
User.find({ age: { $gte: 18 } })
  .sort({ name: 1 })
  .limit(10)
  .skip(20);
```
