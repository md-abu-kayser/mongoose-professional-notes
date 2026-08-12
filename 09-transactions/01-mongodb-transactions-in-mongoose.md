# MongoDB Transactions in Mongoose

```js
const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.create([{ name: "Alice" }], { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```
