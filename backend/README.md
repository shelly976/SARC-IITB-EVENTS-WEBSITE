# Django API Backend

A Django REST API backend for authentication and event management, featuring:

- Google OAuth login
- JWT authentication (access + refresh tokens)
- CORS support for React frontend
- Environment variable configuration using `.env`

---

## Tech Stack

- Python 3.13
- Django
- Django REST Framework
- Simple JWT
- Google Auth
- django-cors-headers
- python-dotenv
- SQLite (default)

---

## Project Structure

```text
backend/
│
├── api/                 # Main app
├── backend/             # Django project settings
├── .venv/               # Virtual environment
├── .env                 # Environment variables
├── requirements.txt
├── manage.py
└── README.md
```

---

## Setup Instructions

### 1. Clone repository

```bash
git clone <your-repo-url>
cd backend
```

---

### 2. Create virtual environment

```bash
python -m venv .venv
```

Activate:

**Windows (PowerShell)**

```bash
.venv\Scripts\activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file in the backend root:

```env
DEBUG=True
SECRET_KEY=your_django_secret_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

### Generate Django secret key

Run:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copy the output into:

```env
SECRET_KEY=your_generated_key
```

---

## Google OAuth Setup

Go to Google Cloud Console:

https://console.cloud.google.com/apis/credentials

Create **OAuth Client ID**.

### Authorized JavaScript Origins

Add:

```text
http://localhost:5173
http://127.0.0.1:5173
```

Copy the generated client ID into:

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
```

---

## Database Setup

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Run Development Server

```bash
python manage.py runserver
```

Backend available at:

```text
http://127.0.0.1:8000
```

---

## API Authentication

This project uses **JWT authentication**.

### Login flow

1. User signs in with Google on frontend.
2. Frontend sends Google token to Django backend.
3. Backend verifies token.
4. Backend returns:

- Access token
- Refresh token

---

### Access Token

Used for protected API requests.

Example header:

```text
Authorization: Bearer <access_token>
```

---

### Refresh Token

Used to generate a new access token when access token expires.

---

## CORS Configuration

Allowed frontend origins:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
```

---

## Installed Packages

Core packages include:

- Django
- djangorestframework
- djangorestframework-simplejwt
- django-cors-headers
- python-dotenv
- google-auth
- requests

---

## Common Commands

### Create migrations

```bash
python manage.py makemigrations
```

### Apply migrations

```bash
python manage.py migrate
```

### Create superuser

```bash
python manage.py createsuperuser
```

### Run server

```bash
python manage.py runserver
```

---

## Common Errors

### `ModuleNotFoundError`

Install missing dependencies:

```bash
pip install -r requirements.txt
```

---

### Google OAuth `deleted_client`

Your Google OAuth client was deleted.

Create a new client and update:

```env
GOOGLE_CLIENT_ID=your_new_client_id
```

---

### CORS blocked

Check:

```python
CORS_ALLOWED_ORIGINS
```

---

## Notes

- Never commit `.env`
- Add `.env` to `.gitignore`
- Keep `SECRET_KEY` private
- Use `DEBUG=False` in production

---

## License

For educational/project use.