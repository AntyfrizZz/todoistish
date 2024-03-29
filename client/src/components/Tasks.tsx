import React from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";

export const Tasks = () => {
  const {tasks} = useTasks("1");

  let projectName = "";

  return (
    <div data-testid="tasks">
      <h2 data-testid="project-name"></h2>
      {projectName}
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
