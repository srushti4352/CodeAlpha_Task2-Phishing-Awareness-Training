# 🛡️ Phishing Awareness Training (Task 2)

This project is a phishing awareness training web application developed using **Python Flask**. It helps users learn to identify phishing attacks and improve cybersecurity hygiene through interactive training and quizzes.

## 📌 Project Overview

Phishing attacks are among the most common cybersecurity threats. This web-based tool provides users with:

- Educational content on phishing types and tactics  
- Interactive quiz to test awareness  
- Clean and responsive web interface using HTML, CSS, and JavaScript  
- Simple Flask backend for routing and rendering pages  

## 🗂️ Folder Structure

Task2/
├── app.py # Main Flask application
├── templates/ # HTML templates
│ ├── index.html # Home/landing page
│ └── quiz.html # Quiz interface
├── static/ # Static files
│ ├── style.css # Custom styles
│ └── script.js # JavaScript for interactivity


## 🚀 How to Run the Project

### 1️⃣ Prerequisites

Make sure you have **Python 3** and **Flask** installed. You can install Flask using pip:
pip install flask

## 2️⃣Run the Application
python app.py
Then open your browser and go to:
📍 http://127.0.0.1:5000

Features
✅ User-friendly landing page explaining phishing threats
✅ Interactive phishing awareness quiz
✅ Responsive layout using CSS
✅ JavaScript-based quiz logic and score tracking
✅ Easily extendable with more pages or question sets

## Topics Covered in Training
What is phishing?
Types of phishing:
   Email phishing
   Spear phishing
   Smishing (SMS phishing)
   Vishing (voice phishing)
Real-world phishing examples
How to identify fake links and spoofed senders
Best practices for prevention

## 🛠️ Tech Stack
| Technology | Usage                          |
| ---------- | ------------------------------ |
| Python     | Backend logic                  |
| Flask      | Web framework                  |
| HTML       | Page structure                 |
| CSS        | Styling                        |
| JavaScript | Quiz logic and UI interactions |

## Code(index.html)

<!-- templates/index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Phishing Awareness Training</title>
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>
  <h1>🎯 Phishing Awareness Training Module</h1>
  <ul>
    <li><a href="#phishing">What is Phishing?</a></li>
    <li><a href="#recognize">How to Recognize Phishing?</a></li>
    <li><a href="#social">Social Engineering Tactics</a></li>
    <li><a href="#tips">Best Practices</a></li>
    <li><a href="/quiz">Take the Quiz</a></li>
  </ul>

  <section id="phishing">
    <h2>What is Phishing?</h2>
    <p>Phishing is a cyberattack that tricks users into revealing sensitive information...</p>
  </section>

  <section id="recognize">
    <h2>Recognizing Phishing Emails/Websites</h2>
    <ul>
      <li>Check sender’s email</li>
      <li>Look for suspicious links</li>
      <li>Spelling and grammar mistakes</li>
    </ul>
  </section>

  <section id="social">
    <h2>Social Engineering Tactics</h2>
    <p>Attackers may use fear, urgency, or authority to trick victims...</p>
  </section>

  <section id="tips">
    <h2>Best Practices</h2>
    <ul>
      <li>Never click on suspicious links</li>
      <li>Enable two-factor authentication</li>
      <li>Report phishing emails</li>
    </ul>
  </section>
</body>
</html>

## Output:
<img width="958" height="539" alt="image" src="https://github.com/user-attachments/assets/107c39d1-c209-463e-9168-3f1bba5c9a24" />

## Code(quiz.html)



  

## Output:
<img width="542" height="364" alt="image" src="https://github.com/user-attachments/assets/7207facf-df7d-42a6-8c15-6f7a2977e197" />











