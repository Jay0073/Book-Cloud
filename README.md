# 📚 Book-Cloud

A modern book reading and reviewing platform where users can explore a wide variety of genres, read book details, post reviews, and manage their personal reading library — all in one place.

The platform features a **beautiful and user-friendly UI**, clean navigation, and an intelligent review system that aggregates star ratings and analyzes comments to provide accurate book ratings.

---

## 🌟 Features

- 🔐 **User Authentication** – Sign up, log in, and access personalized content.
  
- 📖 **Read & Discover Books** – Browse books by genre, explore featured collections, and view detailed book info.
  
- 📝 **Review System** – Leave star ratings and comments; reviews are analyzed for book rating aggregation.

- 🧑‍💼 **Author Profiles** – View descriptions and works by featured authors.
  
- 📚 **My Library** – Quickly access books you're currently reading or have saved.
  
- 🎨 **Beautiful UI/UX** – Clean layout with engaging visuals and smooth transitions.

---

## 🛠️ Tech Stack

A modern full-stack web application built using the **MERN** architecture with a focus on performance, design, and scalability.

### 🌐 Frontend
Built with React and styled using Tailwind CSS for rapid UI development.

- **React 19** – UI library for building responsive interfaces  
- **React Router DOM v7** – Client-side routing  
- **Tailwind CSS v4** – Utility-first CSS for beautiful design  
- **Lucide React** – Icon pack for consistent UI elements  
- **Vite** – Lightning-fast dev server and build tool  
- **ESLint + Plugins** – Code linting and formatting for cleaner development  

### 🔧 Backend
Secure and scalable backend with Node.js and Express.

- **Express 5** – Minimal and powerful Node.js web framework  
- **MongoDB + Mongoose** – NoSQL database with schema modeling  
- **JWT** – JSON Web Tokens for authentication  
- **bcryptjs** – Password hashing for user security  
- **dotenv** – Secure environment variable handling  
- **CORS** – Cross-origin resource sharing support  
- **Colors** – CLI color formatting for better logging  

### 📦 Dev Tools & Build
- **Vite CLI** – Fast builds and optimized production output  
- **ESLint Configs** – JS & React linting  
- **Type Definitions** – React & DOM type safety  
- **Globals** – Recognized global variables for linting compatibility  

> ⚙️ All dependencies are kept up-to-date to ensure performance, security, and smooth developer experience.


---

## 📁 Project Structure

A clean full-stack architecture separated into `frontend` and `backend` for better maintainability and scalability.

```
book-cloud/
├── backend/ # Node.js + Express backend
│ ├── auth/ # JWT authentication logic
│ ├── config/ # Database connection
│ ├── Controllers/ # Book, user, and review logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route handlers
│ ├── .env # Environment variables
│ └── index.js # Backend entry point

├── public/ # Static frontend assets

├── src/ # React frontend
│ ├── Components/ # Reusable UI components
│ ├── Pages/ # Main views/pages
│ ├── assets/ # Images and logos
│ ├── App.jsx # Root component
│ └── main.jsx # Entry point

├── index.html # Frontend HTML template
├── package.json # Frontend dependencies
├── vite.config.js # Vite configuration
└── README.md # Project documentation
```
---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Jay0073/Book-Cloud.git
cd Book-Cloud
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Start frontend
```bash
npm run dev
```

### 4. Setup backend
```bash
cd backend
npm install
```
Create a .env file in backend/ with the following:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start backend
```bash
node index.js
```
Now your full stack Book-Cloud app is running locally!

---
## 🤝 Contributing
Contributions are welcome! Here's how to contribute:
 - Fork the project.
 - Create a new branch ```git checkout -b feature/your-feature-name```
 - Commit your changes ```git commit -m 'Add some feature'```
 - Push to the branch ```git push origin feature/your-feature-name```
 - Create a Pull Request.
   
---
## 📌 Notes
- Make sure MongoDB is running locally or use a MongoDB Atlas connection string.
- This project is built with scalability and clean code structure in mind.

---

## 📬 Contact
Feel free to reach out if you have any questions or suggestions.
---
