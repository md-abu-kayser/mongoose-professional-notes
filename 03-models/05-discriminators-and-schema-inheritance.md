# Discriminators

Model inheritance via discriminators: single collection stores multiple schema types distinguished by a discriminator key.

```js
const eventSchema = new Schema({ time: Date }, { discriminatorKey: "kind" });
const Event = mongoose.model("Event", eventSchema);
const ClickEvent = Event.discriminator("Click", new Schema({ url: String }));
```
