
# 🧠 DSA Tracker - MERN Stack Application

A full-stack web app to track your progress in Data Structures & Algorithms problems. It allows users to:

- View a list of problems (sourced from platforms like LeetCode)
- Track completion status (Solved/Unsolved)
- Add new problems
- Mark progress
- Filter by category or difficulty

> Built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**

---

## 🔗 Live Demo

- **Frontend**: [https://shiny-melomakarona-9f0037.netlify.app](https://shiny-melomakarona-9f0037.netlify.app)
- **Backend (API)**: [https://dsa-problems-tracker.onrender.com/api/problems](https://dsa-problems-tracker.onrender.com/api/problems)

---

## 🏗️ Project Structure

```bash
├── client/               # React frontend
│   └── ...              
├── server/               # Express backend
│   ├── models/
│   │   └── Problem.js
│   ├── routes/
│   │   └── problems.js
│   ├── .env              # Environment variables
│   └── index.js          # Server entry point
└── README.md
```

---

## ⚙️ Technologies Used

### Frontend (React)
- React.js
- Axios (for HTTP requests)
- React Router
- Netlify (deployed)

### Backend (Node.js + Express)
- Express.js
- MongoDB + Mongoose
- CORS
- dotenv
- Render (deployed)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dsa-tracker.git
cd dsa-tracker
```

---

### 2. Backend Setup (Express + MongoDB)

#### 📁 Navigate to the server folder

```bash
cd server
```

#### 🔧 Install dependencies

```bash
npm install
```

#### 🔐 Create a `.env` file

```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dsatracker?retryWrites=true&w=majority
JWT_SECRET=<your_secret_key>
```

#### ▶️ Start the server

```bash
node index.js
# or
nodemon index.js
```

---

### 3. Frontend Setup (React)

#### 📁 Navigate to the client folder

```bash
cd ../client
```

#### 🔧 Install dependencies

```bash
npm install
```

#### ⚙️ Create a `.env` file

```bash
REACT_APP_API_URL=https://dsa-problems-tracker.onrender.com/api
```

#### ▶️ Start the React app

```bash
npm start
```

Now visit [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint                         | Description            |
|--------|----------------------------------|------------------------|
| GET    | `/api/problems`                  | Get all problems       |
| POST   | `/api/problems`                  | Add a new problem      |
| PATCH  | `/api/problems/:id`              | Update problem status  |
| DELETE | `/api/problems/:id`              | Delete a problem       |

---

## 🛠️ Environment Troubleshooting

- Make sure MongoDB connection string uses correct DB name:
  ```env
  mongodb+srv://<user>:<pass>@cluster0.mongodb.net/dsatracker?retryWrites=true&w=majority
  ```
- If you see data in `test` database, it means the DB name was not provided in the URI.

---

## 📦 Deployments

- **Frontend**: Netlify  
- **Backend**: Render  
- **Database**: MongoDB Atlas

---

## 🙋‍♂️ Author

- **Nikhil Kumar**
- [LinkedIn](https://www.linkedin.com/in/nikhilkumar24/)  
- [GitHub](https://github.com/nickel-28)

---

## 📌 Future Improvements

- User Authentication (JWT)
- Track time spent per question
- Add difficulty filter and search
- Leaderboards / Rankings

---

## ⭐️ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
