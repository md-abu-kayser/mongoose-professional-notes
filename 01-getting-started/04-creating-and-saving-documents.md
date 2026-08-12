# Creating & Saving Documents

```js
const user = new User({ name: "Alice", email: "alice@example.com" });
await user.save(); // triggers validation, middleware
// or
const user = await User.create({ name: "Alice", email: "alice@example.com" });
```
