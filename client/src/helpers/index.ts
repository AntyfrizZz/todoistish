import { collatedTasks } from "../constants";
import { CollatedTaskModel } from "../types/CollatedTaskModel";

export const collatedTasksExist = (selectedProject: string) =>
  collatedTasks.find((task: CollatedTaskModel) => task.key === selectedProject);
