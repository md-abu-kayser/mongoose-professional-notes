# Declaring Indexes in Schema

```js
const userSchema = new Schema({
  email: { type: String, index: true, unique: true },
});
```
