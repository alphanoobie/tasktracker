"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "./_context/user";
import { useRouter } from "next/navigation";
import { NewTaskModal } from "./_components/newTaskModal";
import { Task } from "./_components/task";
import { EditTaskModal } from "./_components/editTaskModal";

export default function Home() {
  const { authUser }: any = useUserContext();

  const [showModal, setShowModal] = useState<Boolean>(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [clickIndex, setClickIndex] = useState(0);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const getAllTasksByUser = async () => {
    if (authUser) {
      const response = await fetch(`/api/gettasksbyuser?user=${authUser._id}`);
      const data = await response.json();
      setTasks(data.data);
    }
  };

  const handleSearch = () => {
    const searchResult = tasks.filter((task: any) => {
      return task.title.includes(search) || task.description.includes(search);
    });
    setTasks(searchResult);
  };

  useEffect(() => {
    if (authUser === null) {
      router.push("/signin");
    } else {
      getAllTasksByUser();
    }
  }, []);

  const handleNewTaskModal = async () => {
    setShowModal(!showModal);
    await getAllTasksByUser();
  };
  return (
    <div>
      <div className="w-[1000px] h-[100px] bg-[#6F8695] rounded-t-3xl flex items-center px-8">
        <div>
          <button
            className="bg-green-700 w-12 h-12 rounded-full border-2 border-green-900 text-3xl flex items-center justify-center opacity-90 hover:opacity-100"
            onClick={handleNewTaskModal}
          >
            +
          </button>
        </div>
        <div>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="rounded-full px-2 py-1 border-2 mr-2 w-14 bg-[#e7d7c1] border-[#e7d7c1]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {showModal && (
        <div className="flex justify-center">
          <NewTaskModal
            showModal={showModal}
            setShowModal={setShowModal}
            getAllTasksByUser={getAllTasksByUser}
          />
        </div>
      )}

      {showEditTaskModal && (
        <div className="flex justify-center">
          <EditTaskModal
            showEditTaskModal={setShowEditTaskModal}
            setShowEditTaskModal={setShowEditTaskModal}
            getAllTasksByUser={getAllTasksByUser}
            task={tasks[clickIndex]}
          />
        </div>
      )}

      <div className="flex flex-col items-center mt-6">
        {tasks &&
          tasks.map((task, index) => (
            <Task
              task={task}
              key={index}
              index={index}
              setShowEditTaskModal={setShowEditTaskModal}
              setClickIndex={setClickIndex}
              getAllTasksByUser={getAllTasksByUser}
            />
          ))}
      </div>
    </div>
  );
}
