# **🍽️ Fullstack Recipes**
A **fullstack web application** for managing recipes, built with **React (frontend), Flask (backend), and PostgreSQL (database)**.  
The entire application is **containerized using Docker and Docker Compose**, making it easy to deploy and run in any environment.

---

## **📌 Project Overview**
🔹 **Frontend:** React (Create React App)  
🔹 **Backend:** Flask + Flask-CORS  
🔹 **Database:** PostgreSQL  
🔹 **Containerization:** Docker + Docker Compose  

<img width="951" alt="image" src="https://github.com/user-attachments/assets/2dc785fd-51d0-4d67-84ea-deb389ba4ff6" />


---

## **📌 Features**
✔️ View a list of recipes  
✔️ Add new recipes  
✔️ Delete recipes  
✔️ REST API for managing recipes  
✔️ CORS support for frontend-backend communication  
✔️ Fully containerized using Docker for easy deployment  

---

## **📌 How to Run the Project?**
### **🛠️ Step 1: Clone the Repository**
```bash
git clone https://github.com/KDudek1104/fullstack-recipies.git
cd fullstack-recipies
```

### **🛠️ Step 2: Start the Application with Docker**
Ensure that **Docker** and **Docker Compose** are installed on your system. Then, run:
```bash
docker compose up --build
```
This will:
- Set up the **PostgreSQL database**
- Start the **Flask backend**
- Launch the **React frontend**

Once running:
- **Frontend:** [`http://localhost:3000`](http://localhost:3000)  
- **Backend API:** [`http://localhost:5000/recipes`](http://localhost:5000/recipes)  

---

## **📌 API Endpoints**
The backend provides a **REST API** for managing recipes.

### **📖 Get all recipes**
```http
GET /recipes
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Spaghetti Carbonara",
    "ingredients": "2 eggs, 200g pasta, 100g bacon, 50g Parmesan, salt, pepper",
    "instructions": "1. Cook the pasta. 2. Fry the bacon. 3. Mix with eggs and cheese."
  }
]
```

### **➕ Add a new recipe**
```http
POST /recipes
Content-Type: application/json
```
**Request Body:**
```json
{
  "name": "Chocolate Cake",
  "ingredients": "200g flour, 100g sugar, 50g cocoa, 2 eggs, 100ml milk",
  "instructions": "1. Mix ingredients. 2. Bake at 180°C for 30 minutes."
}
```
**Response:**
```json
{
  "message": "Recipe added!",
  "id": 2
}
```

### **🗑️ Delete a recipe**
```http
DELETE /recipes/{id}
```
**Response:**
```json
{
  "message": "Recipe deleted!"
}
```

---

## **📌 Database Schema**
The PostgreSQL database stores all recipes. The schema is defined in **`db/init.sql`**:

```sql
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);
```
The database is initialized with sample recipes.

---

## **📌 File Structure**
```
fullstack-recipes/
│── backend/          # Flask backend (Python API)
│   ├── app.py        # Main API logic
│   ├── requirements.txt # Backend dependencies
│── frontend/         # React frontend
│   ├── src/
│   │   ├── App.js    # Main React component
│── db/               # Database initialization
│   ├── init.sql      # PostgreSQL schema and seed data
│── docker-compose.yml # Docker Compose configuration
│── Dockerfile        # Backend container configuration
```

---

## **📌 How to Stop the Application?**
```bash
docker compose down
```
This stops all containers.

If you want to **reset the database**, use:
```bash
docker compose down -v
```
This removes database volumes and reinitializes `init.sql`.

---

🚀 **Enjoy cooking with Fullstack Recipes! Bon Appétit!** 🍽️😊
