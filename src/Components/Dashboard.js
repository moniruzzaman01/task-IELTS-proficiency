import React, { useState } from "react";
import AllTasks from "./todo/AllTasks";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      taskName: "task1",
      taskDesc: "desc1",
    },
    {
      id: 2,
      taskName: "task2",
      taskDesc: "desc2",
    },
    {
      id: 3,
      taskName: "task3",
      taskDesc: "desc3",
    },
  ];
  const [tasks, setTasks] = useState(data);

  const handleDelete = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  return (
    <div className=" px-5 mt-10">
      <h2 className=" text-white text-3xl font-bold mb-5 ">TODO List</h2>
      <AllTasks tasks={tasks} handleDelete={handleDelete} />
      <h2 className=" text-white text-3xl font-bold mt-10 mb-5 ">Add TODO</h2>
    </div>
  );
};

export default Dashboard;
