# Backup System

The Backup System is a solution designed to perform backups of important files and allow for their restoration when needed. The system stores backups on Amazon S3 and features a simple interface for file uploads and restoration.

## 🔨 Project Features

- **Manual Backup:** Allows manual file uploads for backup.
- **Cloud Storage:** Backup files are stored on Amazon S3, ensuring security and availability.
- **File Restoration:** Allows restoring files from the backup to the local system through the interface.

### Visual Example of the Project

![image](https://github.com/user-attachments/assets/1f56e155-6a6a-4a41-92de-0e898ee835f4)

## ✔️ Techniques and Technologies Used

- **Node.js:** JavaScript platform for server development.
- **Express.js:** Web framework for Node.js.
- **AWS S3:** Amazon's cloud storage service.
- **Multer:** Middleware for file uploads in Node.js.
- **Pug:** Template engine for rendering HTML pages.

## 📁 Project Structure

- **app.js:** Main file configuring the Express server, AWS S3 integration, and routes.
- **bin/**
    - **www:** Script to start the server.
- **config/**
    - `awsConfig.js`: Configuration for connecting to the AWS S3 service.
- **LICENSE:** Project license file.
- **package.json:** Lists project dependencies and scripts.
- **package-lock.json:** Dependency lock file to ensure consistent versioning.
- **public/**
    - **images/**: Folder for storing images.
    - **javascripts/**: Folder for JavaScript files.
    - **stylesheets/**
        - `style.css`: Main CSS file for styling the project.
- **routes/**
    - `index.js`: Manages application routes, including backup and restoration routes.
    - `users.js`: Routes related to users (not used in the backup system).
- **uploads/**: Folder for temporarily storing uploaded files.
- **views/**
    - `error.pug`: Template for the error page.
    - `index.pug`: Template for the backup system's homepage.
    - `layout.pug`: Base template for project pages.

## 🛠️ Running the Project

To run the project locally, follow these steps:

1. **Ensure Node.js is installed**:
    - [Node.js](https://nodejs.org/) is required to run the project. Check if it is already installed with:
      ```bash
      node -v
      ```
    - If not installed, download and install the recommended version.

2. **Clone the Repository**:
    - Copy the repository URL and run the following command in the terminal:
      ```bash
      git clone <REPOSITORY_URL>
      ```

3. **Install Dependencies**:
    - Navigate to the project folder and run the following command to install dependencies:
      ```bash
      npm install
      ```

4. **Configure AWS Credentials**:
    - Create a `.env` file in the project root with your AWS credentials:
      ```
      AWS_ACCESS_KEY_ID=your_access_key_id
      AWS_SECRET_ACCESS_KEY=your_secret_access_key
      AWS_REGION=us-east-1
      AWS_BUCKET_NAME=your_bucket_name
      ```

5. **Start the Server**:
    - Run the following command to start the server:
      ```bash
      npm start
      ```
    - The server will be running at `http://localhost:3000`.

## 🌐 Deploy

The project is available online. Check the site for functionality:

- [https://backupsempre.netlify.app/](https://backupsempre.netlify.app/)
- [https://backup-system-dskw.onrender.com](https://backup-system-dskw.onrender.com)

For deploying on other services like Heroku or AWS Elastic Beanstalk, follow the specific service instructions and ensure that production environment variables are properly configured.
