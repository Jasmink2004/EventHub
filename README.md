# EventHub - Full-Stack Event Management Application

EventHub is a full-stack web application for managing and displaying upcoming events. It includes a React-based frontend, a Node.js/Express backend, and MongoDB for data storage.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Secure password storage using bcryptjs
- JWT-based authentication for protected routes
- Create, read, update, and delete events
- Responsive frontend using React

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas cluster)

## Installation

1. Clone the repository:
git clone https://github.com/<your-username>/eventhub.git
cd eventhub

2. Install dependencies for the backend:
cd backend
npm install
cd ..

3. Install dependencies for the frontend:
cd frontend
npm install --legacy-peer-deps # If you encounter issues with dependencies
cd ..

text

## Running the Application

1. Set up environment variables:
- Create a `.env` file in both the `backend` directory and the `frontend` directory. Refer to the [Environment Variables](#environment-variables) section for required variables.

2. Start MongoDB (if running locally):

- Ensure your MongoDB instance is running.

3. Start the backend server:

cd backend
node server.js

text

- The server will start on port 5000 (or the port specified in your `.env`).

4. Start the frontend React app:

cd frontend
npm start

text

- The frontend will open in your default browser at `http://localhost:3000`.

## Environment Variables

The application requires the following environment variables:

### Backend (`backend/.env`)

- `MONGO_URI`: MongoDB connection string. Example: `mongodb://localhost:27017/eventhub`
- `JWT_SECRET`: Secret key for JWT authentication. Use a strong, random string.
- `PORT`: The port the backend server runs on (optional, defaults to 5000).

### Frontend (`frontend/.env`)

- This project doesn't directly use `.env` in the frontend during development because Create React App handles environment variables differently. Prefix variables intended for use in the browser with `REACT_APP_`.
- For example, if you had a backend URL configuration, you might set `REACT_APP_BACKEND_URL=http://localhost:5000`

Create example envirement variables such as this
MONGO_URI=mongodb+srv://[username]:[password]@[clustername].mongodb.net/eventhub
JWT_SECRET=[your-secret-key]
Port=5000

text

## Project Structure

eventhub/
├── backend/ # Node.js/Express backend
│ ├── models/ # MongoDB models
│ │ ├── User.js
│ │ └── Event.js
│ ├── routes/ # API routes
│ │ ├── auth.js
│ │ └── events.js
│ ├── server.js # Main server file
│ ├── .env # Environment variables
│ ├── package.json
│ └── package-lock.json
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # Application pages (e.g., Login, Events)
│ │ ├── App.js # Main React component
│ │ └── ...
│ ├── public/
│ ├── .env # Environment variables (if any - see above!)
│ ├── package.json
│ └── package-lock.json
├── .gitignore # Specifies intentionally untracked files that Git should ignore
└── README.md # Project documentation

text

## API Endpoints

The backend provides the following API endpoints:

### Authentication (`/api/auth`)

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

### Events (`/api/events`)

- `POST /api/events`: Create a new event (protected route, requires JWT).
- `GET /api/events`: Get all events.

## Deployment

The frontend is designed to be deployed using [GitHub Pages](https://pages.github.com/).  The backend can be deployed to services like Heroku, AWS, or Render.

### Frontend Deployment

1.  Update the `package.json` in the `frontend` directory:
    ```
    "homepage": "https://<your-github-username>.github.io/eventhub",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
    }
    ```

2.  Run the deployment command:
    ```
    cd frontend
    npm run deploy
    ```

### Backend Deployment

- Deploy to Heroku, AWS, or Render. Set the environment variables (MONGO_URI, JWT_SECRET, etc.) in your hosting platform.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to the branch.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.




