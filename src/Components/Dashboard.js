import React, { useEffect, useState } from "react";
import AllTasks from "./todo/AllTasks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Dashboard = () => {
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    if (authUser) {
      fetch(
        `https://infinite-hollows-86577.herokuapp.com/tasks/${authUser.email}`
      )
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }
  }, [authUser]);

  const [tasks, setTasks] = useState([]);

  const handleDelete = (id) => {
    fetch(`https://infinite-hollows-86577.herokuapp.com/tasks/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const filtered = tasks.filter((task) => task._id !== id);
          setTasks(filtered);
        }
      });
  };

  const addTodo = async (event) => {
    event.preventDefault();

    const userEmail = authUser.email;
    const taskName = event.target.tName.value;
    const taskDesc = event.target.tDesc.value;
    const task = { userEmail, taskName, taskDesc };

    await fetch(`https://infinite-hollows-86577.herokuapp.com/tasks`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const a = [...tasks, task];
          setTasks(a);
        }
      });
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
          className="input input-bordered input-primary block mx-auto rounded-full h-10 max-w-md w-full px-5 mb-5"
          required
        />
        <input
          type="text"
          name="tDesc"
          placeholder="Task Description"
          className="input input-bordered input-primary block mx-auto rounded-full h-10 max-w-md w-full px-5 mb-5"
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
