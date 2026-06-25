# 🍕 Food Delivery App

A full-stack, modern Food Delivery Web Application featuring a client storefront, an admin dashboard, and a Node.js/Express backend API.

---

## 🛠️ Architecture & Tech Stack

This project is structured as a monorepo consisting of three main modules:

1.  **Backend (`/backend`)**: Built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. It handles API services, database storage, JSON Web Token (JWT) user authentication, Stripe payment processing integrations, and static media hosting for food items.
2.  **Frontend Storefront (`/frontend`)**: Built with **React.js**, **Vite**, **React Router DOM**, and **Context API** for state management. It provides consumers with a responsive user interface to browse food items, manage their cart, authenticate/register, place orders, and make payments.
3.  **Admin Dashboard (`/admin/vite-project`)**: Built with **React.js** and **Vite**. It enables store operators to manage catalog items (adding new foods with file uploads, listing/deleting items) and track/update order statuses in real-time.

---

## 🚀 Getting Started

To run the application locally, you will need to start the backend, frontend, and admin servers.

### Prerequisites
*   Node.js (v18 or higher)
*   npm (v9 or higher)
*   MongoDB instance (local or Atlas)

---

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` root directory:
   ```env
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```
   The backend API will run on **`http://localhost:4000`**.

---

### 2. Frontend Storefront Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   The user interface will run on **`http://localhost:5173`**.

---

### 3. Admin Dashboard Setup

1. Navigate to the admin project directory:
   ```bash
   cd ../admin/vite-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   The admin panel will run on **`http://localhost:5174`** (or fallback to `5174` if `5173` is active).

---

## 📡 API Endpoints

The backend exposes several routes:

*   **User Auth (`/api/user`)**: Registration (`/register`) & login (`/login`).
*   **Food Catalog (`/api/food`)**: Add new items (`/add`), list items (`/list`), and remove items (`/remove`).
*   **Cart Management (`/api/cart`)**: Add to cart (`/add`), remove from cart (`/remove`), and retrieve cart data (`/get`).
*   **Order Management (`/api/order`)**: Place order (`/place`), verify order status (`/verify`), list user orders (`/userorders`), and list all store orders (`/list`).

---

## 🔒 Security & Best Practices
*   **Environment Variables:** Production secrets (JWT secrets, Stripe API tokens) are read from `.env` and kept secure.
*   **Password Hashing:** User passwords are encrypted with `bcrypt` salt rounds before saving to MongoDB.
*   **Route Protection:** Cart operations and order placements are guarded by a token verification middleware.
*   **File Uploads:** Food catalog images are uploaded and stored locally in the backend using `multer`.