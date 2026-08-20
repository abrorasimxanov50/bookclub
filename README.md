# BookClub — To'liq loyiha

## Papka tuzilmasi

```
exam-backend/
├── frontend/    ← React + Vite (Frontend)
└── backend/     ← Express + Prisma + SQLite (Backend)
```

---

## 🚀 Ishga tushirish

### 1. Backend (API server)

```bash
cd backend
npm install
npx prisma db push
npx prisma db seed
npm run dev
```
Server `http://localhost:5000` da ishlaydi.

---

### 2. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```
Sayt `http://localhost:5173` da ochiladi.

---

## 🔑 Test uchun akkauntlar

| Email | Parol | Rol |
|-------|-------|-----|
| admin@bookclub.com | password123 | Admin |
| user@bookclub.com | password123 | User |

---

## 🛠️ Texnologiyalar

### Frontend
- React + TypeScript + Vite
- TailwindCSS + Lucide icons
- Axios (API so'rovlar)

### Backend
- Node.js + Express + TypeScript
- Prisma ORM + SQLite
- JWT Authentication + bcrypt
