import React from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";

export const Content = () => {
  const a = 1;

  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
};
