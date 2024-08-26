# GeeksForGeeksQuizzer
SmartLearn is a web application designed to enhance student learning by providing personalized multiple-choice questions (MCQs) based on their academic programme and level. It achieves this by generating questions from GeeksforGeeks 

Table of Contents
Overview
Features
Installation
Usage
Contribution
Acknowledgements
Contact

Overview
SmartLearn aims to improve the study process for students by offering tailored practice questions aligned with their courses. By scraping MCQs from GeeksforGeeks, SmartLearn provides a comprehensive revision tool that adapts to the student’s needs.

Features
User Registration & Login: Secure system for student registration and authentication.
MCQ Generation: Automatically generates multiple-choice questions based on the student’s programme and level using data from GeeksforGeeks.
Progress Tracking: Monitors student progress, accuracy, and areas needing improvement.
Personalized Feedback: Provides insights and recommendations based on performance.

Installation
To set up SmartLearn locally on your PC, follow these instructions:

Clone the Repository:
git clone https://github.com/Loui-1/smartlearn.git
cd smartlearn

Install Dependencies:
Navigate to the project directory and install the required dependencies.

For backend:
cd backend
npm install

For frontend:
cd frontend
npm install

Configure Environment Variables:
Create a .env file in the root directory and add your configuration settings, such as a database.

Run the Application

Start the backend server:
cd backend
npm start

Start the frontend server:
cd frontend
npm start
The application should now be running on http://localhost:3000.

Usage
Register an Account: Sign up with your name, programme, and level.
Login: Access your account using your credentials.
Generate Questions: View and attempt MCQs based on your programme and level.
Track Progress: Monitor your performance and receive feedback.

Contribution:
Contributions are always welcome to SmartLearn To do so:
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a pull request.

License

Acknowledgements
GeeksforGeeks: For providing the MCQs used in the app.
Open Source Communities(Tailwind CSS, ReactJS, Flask,etc): For the libraries and tools that support our development efforts.

Contact:
For questions or support, please contact:

Author: Takyi Louisa Acheampomaa
GitHub Repository: https://github.com/Loui-1/GeeksForGeeksQuizzer
