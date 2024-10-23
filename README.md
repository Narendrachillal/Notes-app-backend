# Notes Backend API

This is a backend API for a Notes application built using Express.js. The API allows users to create, read, update, and delete notes, manage user accounts, authenticate users, and upload profile pictures.

## Table of Contents

- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [API Endpoints](#api-endpoints)
  - [Note](#note)
  - [User](#user)
  - [Auth](#auth)
  - [Profile Picture](#profile-picture)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)

## Dependencies

- **bcrypt**: Used for hashing passwords before storing them in the database to enhance security.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`, allowing for easy configuration management.
- **express**: A web framework for Node.js used to build the API endpoints.
- **jsonwebtoken**: Used to create and verify JSON Web Tokens (JWT) for user authentication.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used for database interactions.
- **multer**: A middleware for handling `multipart/form-data`, used for uploading user profile pictures.
- **nodemailer**: Used to send emails, such as OTPs for user authentication.
- **otp-generator-random**: Generates random OTPs for user verification.

## Dev Dependencies

- **nodemon**: A development tool that automatically restarts the Node.js application when file changes are detected.

## API Endpoints

### Note
- **POST** `/api/v1/notes/create` - Create a new note
- **DELETE** `/api/v1/notes/:id` - Delete a note by ID
- **GET** `/api/v1/notes/all` - Get all notes
- **GET** `/api/v1/notes/g/:id` - Get a single note by ID
- **PUT** `/api/v1/notes/e/:id` - Update a note by ID

### User
- **GET** `/api/v1/users/readOne/:id` - Get user details


### Auth
- **POST** `/api/v1/auth/login` - Log in a user
- **POST** `/api/v1/auth/register` - Register a new user

### Profile Picture
The API allows users to upload their profile picture via Multer middleware. The pictures are stored in the `/uploads` directory.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file by copying the `.env.example` file and filling in the necessary values:
    ```bash
    cp .env.example .env
    ```
    Fill in the `.env` file with your configuration values, such as database URL, JWT secret, PORT, email credentials, etc.

## Running the Project

1.Start the server using nodemon:
```bash
npm run dev
```

2.The server should now be running at http://localhost:PORT. You can test the API endpoints using Thunder Client, Postman, or any other API testing tool.


 
