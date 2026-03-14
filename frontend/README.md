# Frontend

## Quality Check Questions

### ● How you structured components

I followed a proper folder structure such as:

- `components`
- `services`
- `styles`

This helps keep the project organized and easy to maintain.

For styling, I used **vanilla CSS**, since only **Bootstrap** was allowed for the assignment. The `styles` folder contains CSS files so that the JSX code remains clean.

The UI has been broken down into multiple **reusable components** wherever possible.

---

### ● How you handled data fetching

Since there was only one API, I used the native `fetch` API. In a real-world production application, I would likely use **Axios** with interceptors.

Some important things implemented:

- Proper **loading states**
- Proper **error handling**
- Data fetching logic placed in a **separate services file** for separation of concerns
- A **common folder structure** so other developers can easily understand and work with the project
- Use of **React Suspense** for handling loading states on pages

---

### ● What you did to ensure SEO & performance

- Added proper **metadata** on the services page
- Used **semantic HTML tags** wherever possible
- Avoided unnecessary **client-side components**, since they are not ideal for SEO
- Used **async server components** to make API calls on the server side

---

# SEO & Performance Awareness Questions

### ● What makes your page SEO-friendly?

Using **Next.js server-side rendering** provides a big advantage compared to traditional React applications.

Key factors:

- Using **server components**
- Proper **semantic HTML tags**
- Server-side rendering which helps search engines crawl the page more effectively

---

### ● What could be improved further if this went live?

Some improvements for a production environment:

- Integrating tools like **Google Search Console** and **Microsoft Webmaster Tools**
- Adding important SEO files such as:
  - `sitemap.xml`
  - `robots.txt`
- Ensuring authenticated or private pages are not indexed
- Adding a **blog section**, which often helps improve SEO through content

---

### ● How would you measure performance?

Performance could be monitored using tools such as:

- **Google Search Console**
- Other performance monitoring tools

Important metrics include:

- Page load time
- Core web performance metrics

Additionally, avoiding **unnecessary animations or heavy client-side logic** helps maintain good performance and SEO.
