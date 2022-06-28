import React from "react";

const AllTasks = ({ tasks, handleDelete }) => {
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Task</th>
            <th>Desciption</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, key) => (
            <tr key={key}>
              <th>{key + 1}</th>
              <td>{task.taskName}</td>
              <td>{task.taskDesc}</td>
              <td>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-xs btn-error text-white mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTasks;
