import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

export const useTasks = (selectedProject: any) => {
  const [tasks, setTasks] = useState<any>([]);
  const [archivedTasks, setArchivedTasks] = useState<any>([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "az");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where(
            "projectId",
            "==",
            "selectedProject"
          ))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    return unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task: any) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task: any) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task: any) => task.archived !== false));
    });
  }, [selectedProject]);

  return { tasks, selectedProject };
};

export const useProjects = () => {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "az")
      .orderBy("projectId")
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
