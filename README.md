 Deco Ceramicas Backend

A RESTful API backend for a ceramics decoration e-commerce platform, built with TypeScript and Node.js following Clean Architecture principles.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Architecture](#architecture)
- [Development](#development)

## 🎯 Overview

This backend service provides product management functionality for a ceramics decoration store. It follows Clean Architecture principles, ensuring separation of concerns and maintainability.

## ✨ Features

- **Product Retrieval**: Get products by ID or category
- **Category Filtering**: Filter products by predefined categories
- **Stock Management**: Built-in stock tracking and availability checks
- **Clean Architecture**: Domain-driven design with clear layer separation
- **Type Safety**: Full TypeScript implementation with strict type checking

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Database**: MySQL (via mysql2)
- **HTTP Server**: Native Node.js HTTP module
- **Environment**: dotenv
- **CORS**: Enabled for cross-origin requests

## 📁 Project Structure

```
src/
├── adapter/
│   └── mappers/          # Data transformation mappers
├── application/
│   └── product/          # Use cases (business logic)
├── domain/
│   ├── entities/         # Domain entities
│   └── repositories/     # Repository interfaces
├── infraestructure/
│   ├── db/               # Database connection
│   ├── factory/          # Repository factory
│   ├── http/
│   │   └── routes/       # HTTP route handlers
│   └── repositories/     # Repository implementations
├── shared/               # Shared DTOs and types
└── server.ts             # Application entry point
```

## 📦 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- MySQL database server
- Access to a MySQL database with products and categories tables

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Camilo-tsx/deco-ceramicas-be.git
cd deco-ceramicas-be
```

2. Install dependencies:
```bash
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root directory with the following variables:

```env
DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=3306
```

**Required Environment Variables:**
- `DB_HOST`: MySQL server host
- `DB_USER`: MySQL username
- `DB_PASSWORD`: MySQL password
- `DB_NAME`: Database name
- `DB_PORT`: MySQL port (optional, defaults to 3306)

## 💻 Usage

### Development Mode

Run the server in development mode with hot-reload:

```bash
npm run dev
```

The server will start on port **3005** by default.

### Production Mode

1. Build the project:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:3005
```

### Get Product by ID
Retrieve a single product by its ID.

**Endpoint:** `GET /api/products/:id`

**Example:**
```bash
GET /api/products/1
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 29.99,
  "stock": 10,
  "category": "DECO HOME",
  "imgUrl": "https://example.com/image.jpg",
  "slug": "product-name",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Error Responses:**
- `404 Not Found`: Product not found
- `500 Internal Server Error`: Server error

### Get Products by Category
Retrieve all products in a specific category.

**Endpoint:** `GET /api/products/category/:category`

**Valid Categories:**
- `DECO HOME`
- `DECO ARTE`
- `COCINA`
- `ACCESORIOS`

**Example:**
```bash
GET /api/products/category/DECO%20HOME
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 29.99,
    "stock": 10,
    "category": "DECO HOME",
    "imgUrl": "https://example.com/image.jpg",
    "slug": "product-name",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

**Error Responses:**
- `400 Bad Request`: Invalid category
- `404 Not Found`: No products found in category
- `500 Internal Server Error`: Server error

## 🏗 Architecture

This project follows **Clean Architecture** principles with the following layers:

### Domain Layer
- **Entities**: Core business objects (e.g., `Product`)
- **Repositories**: Interfaces defining data access contracts

### Application Layer
- **Use Cases**: Business logic implementations (e.g., `getProductById`, `getProductByCategory`)

### Infrastructure Layer
- **Database**: MySQL connection and configuration
- **Repositories**: Concrete implementations of repository interfaces
- **HTTP**: Route handlers and server setup
- **Factory**: Dependency injection for repositories

### Adapter Layer
- **Mappers**: Transform data between layers (Domain ↔ DTO ↔ Database)

### Shared Layer
- **DTOs**: Data Transfer Objects for API communication

## 🧪 Development

### Available Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the production build
- `npm test`: Run tests (if configured)

### Database Schema

The application expects a MySQL database with the following structure:

- **products** table with columns: `id`, `product_name`, `price`, `stock`, `category_id`, `img_url`, `slug`, `created_at`, `updated_at`
- **categories** table with columns: `id`, `category_name`

Products are joined with categories to retrieve category names.

## 🗺️ Roadmap

Future implementations planned for this project:

- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Order management
- [ ] Additional product endpoints (POST, PUT, DELETE)
- [ ] Category management endpoints
- [ ] File upload service (product images)
- [ ] Redis caching layer



