# Typing Schemas & Models

```ts
interface IUser { name: string; email: string; }
const userSchema = new Schema<IUser>({ name: { type: String, required: true }, ... });
const User = model<IUser>('User', userSchema);
```
