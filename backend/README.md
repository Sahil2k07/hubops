# Backend

## Answers to the Questions

### 1. How would you scale this API if traffic increases?

Right now, this is just a static context that is sent from the backend. In a production setup, I would definitely use a database for any API interactions.

I would also include pagination using `limit` and `offset` so that the API sends data in chunks instead of returning everything at once.

Since this is a good example of static data being sent from the backend (data that does not change often), I would include an in-memory caching service. If the system were horizontally scaled, I would use something like **Redis** for caching.

Additionally, all APIs should have **rate limiting** in place if the number of users becomes very high.

---

### 2. What security concerns should be addressed in production?

Right now we are not using a database for simplicity, but in production we should definitely include one.

Some important security considerations would be:

- Keep `.env` files in `.gitignore` to avoid leaking credentials.
- Use a valid **ORM** to help prevent SQL injection attacks.
- If we had `POST` or `PUT` APIs that accept body payloads, we should always perform **input validation and sanitization** using a library like **Zod**.

---

### 3. How would you version this API?

I would version the API by suffixing the URL with something like:

```txt
/api/v1
```

This ensures that if we introduce breaking changes later (for example `/api/v2`), the existing UI that depends on the current API behavior will continue to work without issues.
