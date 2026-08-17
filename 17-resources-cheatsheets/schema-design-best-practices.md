# Schema Design Best Practices

- Embed for read‑heavy, reference for write‑heavy.
- Use discriminators for polymorphic data.
- Prefer `lean()` for read‑only queries.
- Avoid unbounded arrays.
