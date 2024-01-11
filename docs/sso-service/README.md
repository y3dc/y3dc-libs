# SSO Service Documentation

## 1. Introduction

The SSO Service is a microservice in our system designed to manage user-related functionalities, including user registration, authentication, and profile management.

## 2. Architecture

The SSO Service follows a microservices architecture, communicating with other services via RESTful APIs. It interacts with the Authentication Service for user authentication and the Profile Service for additional user details.

![SSO Service Architecture](link-to-diagram)

## 3. Microservice Descriptions

### 3.1 SSO Service

- **Name and Purpose:** Manages user-related operations.
- **Endpoints and APIs:**
  - `/users/register`: Register a new user.
  - `/users/login`: Authenticate a user.
  - `/users/{id}`: Get user details by ID.
- **Dependencies:** Authentication Service, Profile Service, Database (MongoDB).
- **Data Storage:** Stores user information in the User Collection in MongoDB.

## 4. Communication Protocols

The SSO Service communicates with other services using RESTful APIs.

## 5. Data Models

### 5.1 User Model

```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

# SSO SERVICE

## TODO

- [ ] **async** controller func - check yt - asyncErrorHandler
- [ ] check `const userRepository = AppDataSource.getRepository(User)`
- [ ] // TODO: format response { data: ..., message: ..., error: ..., status: ... }
- [ ] base module / tool gen code
- [ ] in each README in repos link to this docs
- [ ] explain each field in model
- [ ] intro
  - [ ] the database type
  - [ ] the main tech, libs used
  - [ ]

## NOTE

- store token to used when logout

## API

### RestFul

#### Register

```json
POST: /auth/register
{
    "username": "admin",
    "password": "123456"
}
```

#### Login

```json
POST: /auth/login
{
    "username": "admin",
    "password": "123456"
}
```

### gRPC

#### Verify token
