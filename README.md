# Quizcade

Quizcade is an interactive web-based quiz application that allows users to test their knowledge across various categories. With a retro-inspired design and engaging gameplay, Quizcade provides a fun and challenging experience.

## Features

* **Multiple Quiz Categories**: Choose from a variety of topics including:
    * 🧠 General Knowledge
    * 🏅 Sports
    * 🗞 Current Affairs
    * 🌍 Geography
    * 🎮 Mixed (Random)
* **Timed Questions**: Each question has a 15-second timer to add an element of challenge.
* **Score Tracking**: Your score is displayed at the end of each quiz.
* **Dynamic Backgrounds**: Unique background images for each question in some categories enhance the visual experience.
* **Background Music**: An optional background music track to set the mood.

## How to Play

1.  **Open `index.html`**: Launch the main page of the Quizcade application in your web browser.
2.  **Play Music (Optional)**: Click the "▶" button to start the background music.
3.  **Choose Your Quiz**: Select a quiz category from the main menu by clicking on the desired category button.
4.  **Answer Questions**: Read the question and choose the correct option before the timer runs out.
5.  **View Your Score**: After completing all questions, your final score will be displayed.

## Project Structure

The project is organized into several HTML, CSS, and JavaScript files for different quiz categories and overall styling.

* `index.html`: The main landing page where users choose a quiz category.
* `project.css`: Contains the general styling for the main landing page.
* `theme1.mp3`: The background music file.

### Quiz Category Files:

Each quiz category has its own set of files:

* **HTML**:
    * `gk.html`: General Knowledge quiz page.
    * `sports.html`: Sports quiz page.
    * `ca.html`: Current Affairs quiz page.
    * `geo.html`: Geography quiz page.
    * `mixed.html`: Mixed/Random quiz page.
* **CSS**:
    * `gk.css`: Styling for the General Knowledge quiz.
    * `sports.css`: Styling for the Sports quiz.
    * `ca.css`: Styling for the Current Affairs quiz.
    * `geo.css`: Styling for the Geography quiz.
    * `mix.css`: Styling for the Mixed/Random quiz.
* **JavaScript**:
    * `gk.js`: Contains questions and logic for the General Knowledge quiz.
    * `sports.js`: Contains questions and logic for the Sports quiz.
    * `ca.js`: Contains questions and logic for the Current Affairs quiz.
    * `geo.js`: Contains questions and logic for the Geography quiz.
    * `mix.js`: Contains questions and logic for the Mixed/Random quiz.

### Image Assets:

Various `.jpg` image files are used for backgrounds within the quizzes (e.g., `census.jpg`, `olympics.jpg`, `geo1.jpg`, `sports1.jpg`, etc.).

## Technologies Used

* **HTML5**: Structure of the web pages.
* **CSS3**: Styling and visual presentation.
* **JavaScript**: Quiz logic, timer functionality, score tracking, and dynamic content.

## Setup and Installation

To run this project locally:

1.  **Clone the repository** (if applicable) or download all the project files.
2.  **Navigate to the project directory** in your file system.
3.  **Open `index.html`** in your preferred web browser.

No special server setup or dependencies are required; it can be run directly from the file system.

## Customization

You can easily customize the quizzes by modifying the JavaScript files (`gk.js`, `sports.js`, `ca.js`, `geo.js`, `mix.js`):

* **Add/Edit Questions**: Modify the `questions` array in each JavaScript file to add, remove, or change questions, options, and correct answers.
* **Change Backgrounds**: Update the `backgrounds` array with new image URLs or solid colors.
* **Adjust Timer**: Change the `timeLeft` variable in each JavaScript file to modify the question timer.

## Contributing

Contributions are welcome! If you have suggestions for new features, bug fixes, or improvements, feel free to submit a pull request or open an issue.

## License

[No explicit license provided in the given files. You might want to add one, e.g., MIT, Apache 2.0, etc.]
