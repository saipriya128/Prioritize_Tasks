import React from "react";

interface TaskListProps {
    tasks: {
      task: string;
      priority: string;
      notes: string;
      timeNeeded: string;
      }[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h3>Task List</h3>
      {tasks.map((taskData, index) => (
        <div key={index} className="task">
          <h4>{taskData.task}</h4>
          <p><strong>Priority:</strong> {taskData.priority}</p>
          <p><strong>Notes:</strong> {taskData.notes}</p>
          <p><strong>TimeNeeded:</strong> {taskData.timeNeeded}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
