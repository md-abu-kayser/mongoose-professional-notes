# Common Errors & Solutions

- `ValidationError` – check required fields, custom validators.
- `CastError` – wrong data type (e.g., string to ObjectId).
- `VersionError` – concurrent updates, handle retry.
- `OverwriteModelError` – model already defined, use `mongoose.models` check.
