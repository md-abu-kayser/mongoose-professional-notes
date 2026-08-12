# withTransaction Helper

`session.withTransaction(async () => { ... })` automatically calls `commit`/`abort` and retries on transient errors.

> 📘 Next: [Handling Transaction Aborts & Retries](03-handling-transaction-aborts-and-retries.md)
