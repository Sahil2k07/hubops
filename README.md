# Hubops Assignment

The backend and frontend parts of this project have their own README files located in their respective folders (`backend` and `frontend`). Please refer to them for detailed explanations, architecture, and quality checks.

## If a junior developer joins and this project grows 3× in complexity, what would I refactor first and why?

The current folder structure and choices I have made are a great start for the project. However, if the project grows significantly in complexity, these are the measures I would take:

- I would write **unit tests** for important and complex features because they improve maintainability and make the code more readable.
- I would keep the **deployment of each microservice independent** so that one service does not affect the others.
- I would place strong emphasis on **inline comments and README documentation** in the code itself to make collaboration easier.
- If the project has multiple services with distinct roles, I would **distribute this monolith into microservices** so that each service can be handled by different teams or contributors.

## Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Sahil2k07/hubops.git
cd hubops
```

### 2. Install dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

### 3. Running the project locally

**Backend:**

```bash
npm run dev
```

This will start the backend server on the port `4000`.

**Frontend:**

```bash
npm run dev
```

This will start the Next.js frontend application in development mode.

### 4. Building for production

**Backend:**

```bash
npm run build
npm start
```

**Frontend:**

```bash
npm run build
npm start
```

The production build ensures optimized performance and is ready for deployment.
