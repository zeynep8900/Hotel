# Hotel
 SE4458Final
# Hotel Management System
This project is a hotel management system developed using Node.js and Express.js. MongoDB is used as the database, and API authentication is implemented with JWT.
# Requirements
* Node.js and npm
* MongoDB
* RabbitMQ
* Docker
# Installation
* Node.js and npm
* MongoDB
MongoDB connection URL and other configurations:
* MONGODB_URL=mongodb://localhost:27017
* PORT=3000
* JWT_SECRET=yourSecretKey
# Structure
- Routes
* authRoutes: User authentication operations.
* hotelRoutes: Hotel management operations.
* adminRoutes: Admin operations.
* bookingRoutes: Booking operations
- Middleware
* body-parser: Parses incoming requests with JSON payloads.
* jwt: JSON Web Token for API authentication.
- Example Requests
- - Authentication
* POST
/api/auth/login
 * Body: { "username": "example", "password": "password" }
 * Returns a JWT token upon successful login.
- - Hotels
* GET
/api/hotels
 * Authorization: Bearer <token>
 * Lists all hotels.
* POST
/api/hotels
 * Authorization: Bearer <token>
 * Body: { "name": "Hotel Name", "location": "Location", "rooms": 100 }
 * Adds a new hotel.
- - Bookings
* GET
 /api/bookings
 * Authorization: Bearer <token>
 * Lists all bookings.
* POST
/api/bookings
 * Authorization: Bearer <token>
 * Body: { "hotelId": "12345", "userId": "67890", "date": "2024-10-10" }
 * Adds a new booking.
# RabbitMQ Integration
The project includes functionality for sending messages to RabbitMQ queues.
The sendMessage function allows sending messages to a specified RabbitMQ queue.
# Docker Setup
# Node.js Dockerfile
FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
- Build and run the Docker container:
docker build -t hotel-management-system .
docker run -p 3000:3000 hotel-management-system
- DockerCompose







