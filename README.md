# E-commerce Backend API — Deco Cerámicas

A robust RESTful API built with **vanilla Node.js**, **TypeScript**, and **MySQL**, following **Clean Architecture** principles for maintainability and scalability.

## ✨ Features

- 🏗️ Clean Architecture implementation
- 📦 Product catalog by category
- 💾 MySQL database integration with mysql2/promise
- ✅ Error handling
- 🚀 RESTful API design
- 🔧 Built with vanilla Node.js (no Express)

## 🧰 Tech Stack

- **Node.js (vanilla)** - Runtime environment with native HTTP module
- **TypeScript** - Static typing
- **MySQL** - Relational database
- **mysql2/promise** - MySQL client with Promise support
- **Clean Architecture** - Software design pattern

## 📦 Getting Started

### Prerequisites

- Node.js **v18+**
- npm or yarn
- MySQL **v8.0+**

### Installation
```bash
# Clone the repository
git clone https://github.com/Camilo-tsx/be-deco-ceramicas
cd be-deco-ceramicas

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=deco_ceramicas
NODE_ENV=development
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm test` | Run tests |
| `npm run lint` | Run ESLint |


## 🗺️ API Endpoints

### Products

- `GET /api/products/category/:category` - Get all products by category
- `GET /api/products/:id` - Get product by ID

### Example Requests
```bash
# Get products by category
curl http://localhost:3000/api/products/category/ceramics

# Get specific product
curl http://localhost:3000/api/products/123
```

## 🏗️ Clean Architecture Layers

### Domain Layer
Contains the core business logic and entities (Product). Independent of any external frameworks or databases.

### Application Layer
Contains application services that orchestrate use cases and business logic.

### Infrastructure Layer
Handles database concerns including MySQL connection using `mysql2/promise` and repository implementations.

### Adapters Layer
Handles HTTP communication with the outside world. 

### Shared Layer
DTOs

## 🔌 Database Connection

The project uses `mysql2/promise` for async/await MySQL operations:
```typescript
import mysql, { ConnectionOptions } from "mysql2/promise";

const config: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306,
};

export const db = await mysql.createConnection(config);
```

## 🗺️ Roadmap

Future implementations planned for this project:

- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Order management
- [ ] Additional product endpoints (POST, PUT, DELETE)
- [ ] Category management endpoints
- [ ] File upload service (product images)
- [ ] Redis caching layer

## 📝 Notes

This project follows **Clean Architecture** principles to ensure:
- **Independence**: Business logic is independent of frameworks and databases
- **Testability**: Easy to test with mocked dependencies
- **Maintainability**: Clear separation of concerns
- **Scalability**: Easy to add new features without affecting existing code

