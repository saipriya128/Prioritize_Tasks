# AI Task Prioritizer

The AI Task Prioritizer is a React application that helps you manage and prioritize your tasks with the assistance of OpenAI's GPT-4 model. It allows you to add tasks along with their priority, effort, and suggestions, and then leverages AI to prioritize them in the most efficient and impactful order. The app provides explanations for the prioritization and suggests ways to improve or approach each task.

## Features

- Add tasks with attributes: task name, priority, suggestions, and effort.
- Prioritize tasks using OpenAI's GPT-4 model, considering urgency, effort, and impact.
- Get detailed justifications for the AI's prioritization.
- Simple and intuitive user interface built with React and TypeScript.

## Technologies Used

- **React**: Frontend library to build the user interface.
- **TypeScript**: Strongly typed language for better developer experience and type safety.
- **OpenAI GPT-4**: For AI-driven task prioritization and suggestions.
- **Vite**: A fast build tool for modern web development.
- **CSS**: Basic styling without external frameworks.

## Prerequisites

Before you get started, ensure that you have the following installed:

- **Node.js**: You can download it from [here](https://nodejs.org/).
- **npm**: Node package manager (comes with Node.js).

## Getting Started

### 1. Clone the Repository

bash
git clone https://github.com/your-username/ai-task-prioritizer.git
cd ai-task-prioritizer
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up OpenAI API Key
Obtain an API key from OpenAI.
Replace the API key in src/App.tsx:
ts
Copy
Edit
const openai = new OpenAI({
  apiKey: "your-openai-api-key", // Replace with your OpenAI API key
  dangerouslyAllowBrowser: true,
});
4. Run the Application
bash
Copy
Edit
npm run dev
This will start the development server at http://localhost:3000.

How to Use
Add Tasks: You can add a task by entering its name, priority (High, Medium, Low), suggestions (any additional notes for the task), and effort (High, Medium, Low).
Prioritize Tasks: Once you have added some tasks, click the "Prioritize Tasks" button to have the AI prioritize them based on their priority, effort, and suggestions. The prioritized list will be displayed below the button, along with a justification for each task's position.
View Results: The tasks will be prioritized and displayed in the order suggested by the AI, with explanations of why each task was placed in its respective position.
Contributing
Feel free to fork this repository and submit pull requests. You can improve the app by:

Adding more features (e.g., due dates, categories, etc.).
Improving the UI.
Enhancing the AI's prompt to provide better suggestions.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
OpenAI for providing the GPT-4 API.
React for building the frontend.
Vite for fast and modern web development.
markdown
Copy
Edit

### Steps for Use:

1. **Replace** the `your-openai-api-key` placeholder with your actual OpenAI API key in `App.tsx`.
2. Follow the steps in the **Getting Started** section to install dependencies and run the app.

This README includes instructions for setting up the project, installing dependencies, and contributing, along with details about the technologies used.
