# 🍽️ Food Reels

A **Full Stack MERN** application that combines the experience of **Zomato + Instagram Reels** — where **Food Partners** can upload short reels of their food items, and **Users** can explore, like, and order food directly from those reels.

---

## 🚀 Features

### 👤 User
- Register, Login, and Logout  
- View food reels created by food partners  
- Like, share, and order food items (coming soon)

### 👨‍🍳 Food Partner
- Register, Login, and Logout  
- Create and manage food reels  
- Showcase dishes to potential customers  

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB |
| Authentication | JWT |
| Styling | CSS  |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vrutansh/Food-Reels.git
cd Food-Reels
```

### 2️⃣ Setup the Backend
```bash
cd backend
npm install
npm run dev
```
By default, the backend runs on **http://localhost:3000**

### 3️⃣ Setup the Frontend
```bash
cd ../frontend
npm install
npm install nodemon
npx nodemon ./server.js
```
The frontend runs on **http://localhost:5173** (by Vite default)

---

## 🌐 API Endpoints

### 👤 User Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/user/register` | Register a new user |
| POST | `/api/auth/user/login` | Login user |
| POST | `/api/auth/user/logout` | Logout user |

### 👨‍🍳 Food Partner Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/foodpartner/register` | Register a new food partner |
| POST | `/api/auth/foodpartner/login` | Login food partner |
| POST | `/api/auth/foodpartner/logout` | Logout food partner |

### 🍲 Food Item Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/food` | Create a new food reel |
| GET | `/api/food` | Get all food reels |

---

## 🧩 Folder Structure
```
Food-Reels/
│
├── backend/          # Express + MongoDB server
│   ├── routes/       # API routes
│   ├── models/       # Mongoose schemas
│   ├── controllers/  # Route logic
│   └── server.js
│
├── frontend/         # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## 🧠 Future Improvements
- 🎥 Add video upload and preview support  
- ❤️ Like, comment, and share functionality  
- 🛒 Integrate food ordering & payments  
- 🔔 Real-time notifications  

---

## 🧑‍💻 Author
**Vrutansh Patel**  
🔗 [GitHub](https://github.com/vrutansh)
