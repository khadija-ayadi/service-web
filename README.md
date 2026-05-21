# 🚦 Urban Traffic Platform

A distributed microservices platform for urban traffic management, built with NestJS, GraphQL, and MySQL.

## 🏗️ Architecture

```
Client (Postman / React)
        │
        ▼
API Gateway (GraphQL) — port 4000
        │
        ├── Auth Service      — port 3001
        ├── Vehicles Service  — port 3002
        ├── Traffic Service   — port 3003
        ├── Incidents Service — port 3004
        └── Notifications Service — port 3005
        │
        ▼
    MySQL Database (urban_traffic)
```

## 🛠️ Tech Stack

- **Backend**: NestJS (TypeScript)
- **API**: GraphQL (Apollo Server)
- **Database**: MySQL 8 + TypeORM
- **Auth**: JWT (JSON Web Tokens)
- **Containerization**: Docker + Docker Compose

## 📋 Services

### 1. Auth Service (port 3001)
- User registration
- Secure login
- JWT token generation
- Role management: `ADMIN`, `OPERATOR`

### 2. Vehicles Service (port 3002)
- Add/list/detail vehicles
- Simulated GPS position recording
- Movement history

### 3. Traffic Service (port 3003)
- Create circulation zones
- Measure traffic density
- Detect congested zones
- Classification: `LOW` / `MEDIUM` / `HIGH`

### 4. Incidents Service (port 3004)
- Declare incidents
- Consult incidents
- Update incident status
- Types: `ACCIDENT`, `WORKS`, `CLOSED_ROAD`, `TRAFFIC_JAM`
- Status: `REPORTED`, `IN_PROGRESS`, `RESOLVED`

### 5. Notifications Service (port 3005)
- Send notifications
- Consult notifications
- Mark as read

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- MySQL 8 (or use Docker)

### Run with Docker (recommended)

```bash
git clone https://github.com/khadija-ayadi/service-web.git
cd service-web
docker-compose up --build
```

The API Gateway will be available at: `http://localhost:4000/graphql`

### Run locally

```bash
# Install dependencies for each service
cd services/auth && npm install
cd ../vehicles && npm install
# ... repeat for each service
cd ../../gateway && npm install

# Start each service in a separate terminal
cd services/auth && npm run start:dev      # port 3001
cd gateway && npm run start:dev            # port 4000
```

### Environment Variables

Each service needs a `.env` file:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_password
DB_NAME=urban_traffic
JWT_SECRET=urban_traffic_jwt_secret_2024
```

## 📊 GraphQL API

### Authentication

**Register:**
```graphql
mutation {
  register(input: {
    name: "John Doe"
    email: "john@example.com"
    password: "123456"
  }) {
    token
    user {
      id
      email
      role
    }
  }
}
```

**Login:**
```graphql
mutation {
  login(input: {
    email: "john@example.com"
    password: "123456"
  }) {
    token
    user {
      id
      email
      role
    }
  }
}
```

**Get current user (requires token):**
```graphql
query {
  me {
    id
    email
    name
    role
  }
}
```
> Add header: `Authorization: Bearer <your_token>`

## 👥 Team

- **Khadija Ayadi** — Auth Service, API Gateway, Docker Compose, CI/CD
- **Shayma Trabelsi** — Vehicles, Traffic, Incidents, Notifications Services, Postman Collection, UML Diagrams

## 📁 Project Structure

```
urban-traffic-platform/
├── gateway/                 # API Gateway (GraphQL)
├── services/
│   ├── auth/               # Authentication service
│   ├── vehicles/           # Vehicles management
│   ├── traffic/            # Traffic management
│   ├── incidents/          # Incidents management
│   └── notifications/      # Notifications service
├── docker-compose.yml
└── README.md
```

## 📄 License

MIT
