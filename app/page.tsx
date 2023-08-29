"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "./_context/user";
import { useRouter } from "next/navigation";
import { NewTaskModal } from "./_components/newTaskModal";

export default function Home() {
  const { authUser }: any = useUserContext();

  const [showModal, setShowModal] = useState<Boolean>(false);
  const [tasks, setTasks] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (authUser === null) {
      router.push("/signin");
    } else {
      fetch(`/api/gettasksbyuser?user=${authUser._id}`).then((response) => {
        response.json().then((data) => {
          console.log(data.data);
          setTasks(data.data);
        });
      });
    }
  }, );

  const handleNewTaskModal = async () => {
    setShowModal(!showModal);
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
          <NewTaskModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}

      <div>{JSON.stringify(tasks)}</div>
    </div>
  );
}
