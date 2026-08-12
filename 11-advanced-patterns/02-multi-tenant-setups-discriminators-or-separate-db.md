# Multi‑Tenant Setups

- **Discriminators**: single collection, different schemas per tenant type.
- **Separate databases**: per‑tenant connection string.
- **Tenant field**: add `tenantId` and scope queries via middleware.

> 📘 Next: [Custom Connection Pool Management](03-custom-connection-pool-management.md)
