import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (task: {
    task: string;
    priority: string;
    notes: string;
    timeNeeded: string;
  }) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [notes, setNotes] = useState('');
  const [timeNeeded, setTimeNeeded] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && priority && notes && timeNeeded) {
      onAddTask({
        task,
        priority,
        notes,
        timeNeeded
      });
      // Reset form
      setTask('');
      setPriority('');
      setNotes('');
      setTimeNeeded('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter notes"
        required
      />
      <input
        type="text"
        value={timeNeeded}
        onChange={(e) => setTimeNeeded(e.target.value)}
        placeholder="Enter time needed (e.g., 2 hours)"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;