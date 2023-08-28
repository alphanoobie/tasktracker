"use client";

import { useState } from "react";

export const NewTaskModal = (props: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");

  return (
    <div className="fixed z-1 w-[700px] h-[500px] bg-[#6F8695] rounded-3xl p-8 m-2">
      <div>
        <button
          className="bg-red-700 w-12 h-12 rounded-full border-2 border-red-900 text-3xl flex items-center justify-center opacity-90 hover:opacity-100 absolute right-4"
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          -
        </button>
      </div>

      <form className="flex flex-col w-3/4">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required={true}
          className="mb-2"
        />

        <label>Description</label>
        <textarea
          className="resize-none mb-4"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        >
          {description}
        </textarea>

        <div className="flex justify-around mb-2">
          <div
            className={`rounded-full px-2 py-1 border-2 border-red-800 cursor-pointer ${
              priority === "high" ? "bg-red-600" : "bg-transparent"
            }`}
            onClick={() => {
              setPriority("high");
            }}
          >
            High
          </div>
          <div
            className={`rounded-full px-2 py-1 border-2 border-yellow-800 cursor-pointer ${
              priority === "moderate" ? "bg-yellow-600" : "bg-transparent"
            }`}onClick={() => {
              setPriority("moderate");
            }}
          >
            Moderate
          </div>
          <div
            className={`rounded-full px-2 py-1 border-2 border-green-800 cursor-pointer ${
              priority === "low" ? "bg-green-600" : "bg-transparent"
            }`}
            onClick={() => {
              setPriority("low");
            }}
          >
            Low
          </div>
        </div>
      </form>
    </div>
  );
};
