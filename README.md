# React + Django Project

A full-stack web application built with:

- **Frontend:** React + TypeScript + Vite
- **Backend:** Django + Django REST Framework
- **Authentication:** Google OAuth + JWT
- **Database:** SQLite

---

## Project Structure

```text
react-django-project/
│
├── frontend/     # React frontend
├── backend/      # Django backend
└── README.md
```

---

## Setup Order

### 1. Start Backend First

```bash
cd backend
python manage.py runserver
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

### 2. Start Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## Features

- Google Sign-In
- JWT authentication
- Protected API routes
- React frontend connected to Django backend
- Environment variables using `.env`

---

## Environment Files

### Backend `.env`

```env
DEBUG=True
SECRET_KEY=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
```

### Frontend `.env`

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## Notes

- Start **backend before frontend**
- Do not commit `.env`
- Use `pip install -r requirements.txt` for backend
- Use `npm install` for frontend