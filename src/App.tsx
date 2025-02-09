import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { OpenAI } from "openai";
import "./styles/global.css";

const openai = new OpenAI({
  apiKey: "sk-proj-#",
  dangerouslyAllowBrowser: true,
});

const App: React.FC = () => {
  const [tasks, setTasks] = useState<
    { task: string; priority: string; notes: string; timeNeeded: string }[]
  >([]);
  const [prioritizedTasks, setPrioritizedTasks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const addTask = (taskData: {
    task: string;
    priority: string;
    notes: string;
    timeNeeded: string;
  }) => {
    const updatedTasks = [...tasks, taskData];
    setTasks(updatedTasks);
    console.log("Task added. Current tasks:", updatedTasks);
  };

  const prioritizeTasks = async () => {
    console.log("Prioritize button clicked!");
    if (tasks.length === 0) {
      alert("No tasks to prioritize!");
      return;
    }

    setLoading(true);
    console.log("Setting loading state...");

    try {
      console.log("Tasks being sent to API:", tasks);

      const taskList = tasks
        .map(
          (t) =>
            `${t.task} (Priority: ${t.priority}, Notes: ${t.notes}, Time Needed: ${t.timeNeeded})`
        )
        .join("\n");

      console.log("Formatted task list:", taskList);

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Please prioritize these tasks based on their priority level, notes, and time needed:
            
            ${taskList}
            
            Format each task as:
            1. Task Name - Priority Level (Time Needed)
               Justification: [Based on notes and priority]`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      });

      console.log("API Response:", response);

      const aiResponse = response.choices[0]?.message?.content;
      if (!aiResponse) {
        throw new Error("No response content from API");
      }

      const prioritizedArray = aiResponse.split("\n").filter(line => line.trim() !== "");
      console.log("Prioritized array:", prioritizedArray);

      setPrioritizedTasks(prioritizedArray);
    } catch (error: any) {
      console.error("Detailed error:", error);
      alert(`Error: ${error.message || "Unknown error occurred"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <TaskInput onAddTask={addTask} />
      <button 
        onClick={prioritizeTasks} 
        className="prioritize-button"
        type="button"
        style={{
          cursor: 'pointer',
          opacity: 1,
          backgroundColor: tasks.length === 0 ? '#cccccc' : '#007bff'
        }}
      >
        {loading ? "Prioritizing..." : `Prioritize Tasks (${tasks.length})`}
      </button>

      <TaskList tasks={tasks} prioritizedTasks={prioritizedTasks} />

      {/* Results Box */}
      <div className="results-box">
        <h3>AI Prioritized Tasks</h3>
        {prioritizedTasks.length > 0 ? (
          <div className="prioritized-tasks">
            {prioritizedTasks.map((task, index) => (
              <div key={index} className="prioritized-task-item">
                {task}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">
            {loading ? "Analyzing tasks..." : "Click 'Prioritize Tasks' to get AI recommendations"}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;