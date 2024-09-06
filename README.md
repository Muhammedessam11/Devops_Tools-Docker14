E-commerce Application
This is a simple E-commerce application built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database. The application is Dockerized using Docker Compose to simplify development and deployment.

Project Structure
php
Copy code
e-commerce_application/
│
├── backend/                   # Backend service (Node.js + Express)
│   ├── Dockerfile              # Dockerfile for the backend service
│   ├── package.json            # Backend dependencies and scripts
│   └── src/                    # Backend source code
│
├── frontend/                  # Frontend service (React)
│   ├── Dockerfile              # Dockerfile for the frontend service
│   ├── package.json            # Frontend dependencies and scripts
│   ├── public/                 # Public assets (e.g., index.html)
│   └── src/                    # Frontend source code
│
├── docker-compose.yml          # Docker Compose configuration
└── README.md                   # Project documentation
Prerequisites
Docker
Docker Compose
Getting Started
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd e-commerce_application
2. Build and Start the Application
Run the following command to build and start the application using Docker Compose:

bash
Copy code
docker-compose up --build
This command will:

Build the Docker images for the frontend and backend services.
Start the MongoDB container, the backend container, and the frontend container.
Expose the frontend service on port 3000 and the backend service on port 5000.
3. Access the Application
Frontend: Open your web browser and go to http://localhost:3000.
Backend API: The backend API will be available at http://localhost:5000.
Stopping the Application
To stop the running containers, use:

bash
Copy code
docker-compose down
This command stops and removes all containers defined in the docker-compose.yml file.
