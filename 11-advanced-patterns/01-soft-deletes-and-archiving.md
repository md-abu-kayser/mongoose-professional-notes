# Soft Deletes & Archiving

Add `deletedAt` field, use query middleware to automatically filter out `deletedAt: { $ne: null }`. Use plugin `mongoose-delete`.

> 📘 Next: [Multi‑Tenant Setups – Discriminators or Separate DB](02-multi-tenant-setups-discriminators-or-separate-db.md)
