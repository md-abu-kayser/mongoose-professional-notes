# Refs & Populate Basics

```js
author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
// then: Story.find().populate('author')
```
