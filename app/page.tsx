"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "./_context/user";
import { useRouter } from "next/navigation";
import { NewTaskModal } from "./_components/newTaskModal";
import { Task } from "./_components/task";

export default function Home() {
  const { authUser }: any = useUserContext();

  const [showModal, setShowModal] = useState<Boolean>(false);
  const [tasks, setTasks] = useState([]);

  const router = useRouter();

  const getAllTasksByUser = async () => {
    const response = await fetch(`/api/gettasksbyuser?user=${authUser._id}`);
    const data = await response.json();
    setTasks(data.data);
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

      <div className="flex flex-col items-center mt-6">{tasks && tasks.map((task) => <Task task={task}/>)}</div>
    </div>
  );
}
