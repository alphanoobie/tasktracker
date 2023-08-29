"use client";

import { useState } from "react";
import { useUserContext } from "../_context/user";

export const NewTaskModal = (props: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");

  const { authUser }: any = useUserContext();

  const handleCreatetask = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetch("/api/createtask", {
      method: "POST",
      body: JSON.stringify({
        user: authUser._id,
        title,
        description,
        priority,
        dateCreated: Date.now(),
      }),
    });
    props.setShowModal(false);
    props.getAllTasksByUser();
  };

  return (
    <div className="fixed z-1 w-[700px] h-[500px] bg-[#6F8695] rounded-3xl p-8 m-2 flex flex-col justify-center">
      <div>
        <button
          className="bg-red-700 w-12 h-12 rounded-full border-2 border-red-900 text-3xl flex items-center justify-center opacity-90 hover:opacity-100 absolute right-4 top-4"
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          -
        </button>
      </div>

      <form
        className="flex flex-col w-3/4 h-3/4 justify-around"
        method="POST"
        onSubmit={handleCreatetask}
      >
        <label className="text-lg">Title</label>
        <input
          type="text text-lg"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required={true}
          className="mb-2"
        />

        <label className="text-lg">Description</label>
        <textarea
          className="resize-none mb-8 text-lg"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />

        <div className="flex justify-around mb-4">
          <div
            className={`rounded-full px-2 py-1 border-2 border-red-800 cursor-pointer w-20 text-center text-lg ${
              priority === "high" ? "bg-red-600" : "bg-transparent"
            }`}
            onClick={() => {
              setPriority("high");
            }}
          >
            High
          </div>
          <div
            className={`rounded-full px-2 py-1 border-2 border-yellow-800 cursor-pointer w-20 text-center text-lg ${
              priority === "moderate" ? "bg-yellow-600" : "bg-transparent"
            }`}
            onClick={() => {
              setPriority("moderate");
            }}
          >
            Moderate
          </div>
          <div
            className={`rounded-full px-2 py-1 border-2 border-green-800 cursor-pointer w-20 text-center text-lg ${
              priority === "low" ? "bg-green-600" : "bg-transparent"
            }`}
            onClick={() => {
              setPriority("low");
            }}
          >
            Low
          </div>
        </div>

        <button
          type="submit"
          className={
            "bg-[#e7d7c1] text-lg rounded-full p-1 opacity-80 hover:opacity-100 my-4"
          }
          onClick={handleCreatetask}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
