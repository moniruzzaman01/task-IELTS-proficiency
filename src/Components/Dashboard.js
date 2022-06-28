import React, { useState } from "react";
import AllTasks from "./todo/AllTasks";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      taskName: "test task1",
      taskDesc: "test desc1",
    },
  ];
  const [tasks, setTasks] = useState(data);

  const handleDelete = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const id = tasks.length + 1;
    const taskName = event.target.tName.value;
    const taskDesc = event.target.tDesc.value;
    const newTodo = [...tasks, { id, taskName, taskDesc }];
    setTasks(newTodo);

    event.target.reset();
  };

  return (
    <div className=" px-5 mt-10">
      <h2 className=" text-white text-3xl font-bold mb-5 ">TODO List</h2>
      <AllTasks tasks={tasks} handleDelete={handleDelete} />
      <hr className=" mt-10" />
      <h2 className=" text-white text-3xl font-bold mt-10 mb-5 ">Add TODO</h2>
      <form onSubmit={addTodo} action="">
        <input
          type="text"
          name="tName"
          placeholder="Task Name"
          className=" block mx-auto border-none rounded-full h-10 max-w-md w-full px-5 mb-5"
          required
        />
        <input
          type="text"
          name="tDesc"
          placeholder="Task Description"
          className=" block mx-auto border-none rounded-full h-10 max-w-md w-full px-5 mb-5"
          required
        />
        <button className=" h-10 btn-primary px-10 rounded-full font-bold uppercase ">
          Add
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
