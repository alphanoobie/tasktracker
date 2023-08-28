"use client";
import { useEffect } from "react";
import { useUserContext } from "./_context/user";
import { useRouter } from "next/navigation";
import { NewTaskModal } from "./_components/newTaskModal";

export default function Home() {
  const { authUser }: any = useUserContext();

  const router = useRouter();
  useEffect(() => {
    if (authUser === null) {
      router.push("/signin");
    }
  }, []);

  const handleNewTaskModal = async () => {
    const data = await fetch("/api/createtask", {
      method: "POST",
      body: JSON.stringify({
        user: authUser._id,
      }),
    });
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

      <div className="flex justify-center m-4">
        <NewTaskModal />
      </div>

      <div>{JSON.stringify(authUser)}</div>
    </div>
  );
}
