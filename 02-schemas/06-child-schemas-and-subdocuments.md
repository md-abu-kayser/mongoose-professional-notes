# Child Schemas & Subdocuments

```js
const childSchema = new Schema({ name: String });
const parentSchema = new Schema({ children: [childSchema] });
```
