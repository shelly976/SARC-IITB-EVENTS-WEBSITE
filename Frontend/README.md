# React Frontend

A React frontend for the Django backend API, featuring:

- Google Sign-In authentication
- JWT token handling
- Event display and API integration
- Built with Vite + TypeScript

---

## Tech Stack

- React
- TypeScript
- Vite
- Axios
- Google OAuth (`@react-oauth/google`)

---

## Project Structure

```text
frontend/
│
├── src/
├── public/
├── .env
├── package.json
├── vite.config.ts
└── README.md
```

---

# Important: Start Backend First

This frontend depends on the Django backend API.

Before running frontend, make sure backend is running:

```bash
cd backend
python manage.py runserver
```

Backend should be available at:

```text
http://127.0.0.1:8000
```

Only after backend starts, run the frontend.

---

## Setup Instructions

### 1. Clone repository

```bash
git clone <your-repo-url>
cd frontend
```

---

### 2. Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in frontend root:

```env
VITE_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
```

Example:

```env
VITE_GOOGLE_CLIENT_ID=123456789-abcxyz.apps.googleusercontent.com
```

---

## Google OAuth Setup

Go to:

https://console.cloud.google.com/apis/credentials

Create or open your **OAuth Client ID**.

### Authorized JavaScript Origins

Add both:

```text
http://localhost:5173
http://127.0.0.1:5173
```

Copy that client ID into:

```env
VITE_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
```

---

## Run Frontend

Start development server:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

or

```text
http://127.0.0.1:5173
```

---

## API Connection

Frontend sends requests to backend:

```text
http://127.0.0.1:8000/api/
```

Make sure backend is running before testing login or API features.

---

## Environment Variables in Code

Since this project uses **Vite**, access env variables like this:

```ts
import.meta.env.VITE_GOOGLE_CLIENT_ID
```

Do **not** use:

```ts
process.env
```

Do **not** import:

```ts
dotenv.config()
```

That causes:

```text
ReferenceError: process is not defined
```

---

## Common Commands

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Common Errors

### `process is not defined`

Cause:

Using:

```ts
process.env
```

Fix:

Use:

```ts
import.meta.env.VITE_GOOGLE_CLIENT_ID
```

---

### Google OAuth `deleted_client`

Your OAuth client was deleted.

Create a new Google OAuth client and update:

```env
VITE_GOOGLE_CLIENT_ID=<NEW_GOOGLE_CLIENT_ID>
```

---

### Backend connection failed

Check that backend is running:

```bash
python manage.py runserver
```

---

## Notes

- Start backend before frontend
- Never commit `.env`
- Add `.env` to `.gitignore`

---

## License

For educational/project use.