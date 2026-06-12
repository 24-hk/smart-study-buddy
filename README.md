# Smart Study Buddy

Smart Study Buddy is a web-based study support system, built as my final year project for MSc Computing & Information Systems at the University of Greenwich. The idea behind it is simple: take the materials students already have (PDFs, scanned notes, images) and turn them into something more useful for revision, like quizzes, flashcards, and summaries.

**Live Demo:** [smart-study-buddy-app.onrender.com](https://smart-study-buddy-app.onrender.com)

## Problem
Most students end up with a pile of PDFs, lecture slides, and scanned notes before exams, but these formats don't really help with active revision. Re-reading the same notes over and over isn't an effective way to retain information.

## Solution
Smart Study Buddy lets you upload your study material and automatically generates quizzes, flashcards, summaries, and concept maps from it. It also includes a study planner and a simple gamification system (XP and levels) to keep track of progress and stay motivated.

## Key Features
- PDF and image-based document processing
- Automatic quiz and flashcard generation
- Content summarisation
- Concept map visualisation
- Study planner with PDF export
- Gamification using XP and levels
- Secure user authentication and progress tracking

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express ([`/backend`](backend))
- Database: MongoDB (via Mongoose)
- Authentication: Firebase
- Tools: PDF.js, Tesseract.js (OCR), D3.js
- Deployment: Render

## How It Works
- **Content Extraction:** Text is pulled from PDFs directly, and from images using OCR (Tesseract.js)
- **Search & Structuring:** Regex-based pattern matching to clean up and structure the extracted text
- **Quiz Generation:** Questions and answer options are generated using rule-based logic (no external AI APIs)
- **Flashcards:** Key terms and definitions are extracted automatically from the source text
- **Gamification:** XP and levels are calculated based on study activity and progress

I went with rule-based logic rather than relying on a third-party AI/LLM API, mainly so the project stays self-contained, free to run, and so I could explain exactly how each feature works for my dissertation.

## Author
**Haritha Kalaikovan**
MSc Computing & Information Systems, University of Greenwich

## How to Run

### Frontend
1. Clone the repository:
   ```
   git clone https://github.com/24-hk/smart-study-buddy.git
   ```
2. Open the `SMART STUDY BUDDY` folder.
3. Open `index.html` in your browser (or run it through a local server such as the VS Code "Live Server" extension for full functionality).
4. Set up your own Firebase project credentials where required by the app's configuration, as these are not included in this repository for security reasons.

### Backend
1. Open the `backend` folder:
   ```
   cd backend
   npm install
   ```
2. Create a `.env` file in the `backend` folder with your own MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
3. Start the server:
   ```
   node server.js
   ```

## Screenshots

### Login Page
![Login Page](screenshots/01.png)

### Sign In Page
![Sign In Page](screenshots/02.png)

### Dashboard
![Dashboard](screenshots/04.png)
![Dashboard](screenshots/03.png)

### PDF Upload
![PDF Upload](screenshots/05.png)

### Image Upload
![Image Upload](screenshots/06.png)

### Flashcards
![Flashcards](screenshots/07.png)

### Quiz Generator
![Quiz Generator](screenshots/08.png)

### PDF Summarizer
![PDF Summarizer](screenshots/09.png)

### Study Assistant
![Study Assistant](screenshots/10.png)

### Concept Map
![Concept Map](screenshots/11.png)

### Research Paper Tools
![Research Paper Tools](screenshots/12.png)
![Research Paper Tools](screenshots/13.png)

### Gamification
![Gamification](screenshots/14.png)
![Gamification](screenshots/15.png)
