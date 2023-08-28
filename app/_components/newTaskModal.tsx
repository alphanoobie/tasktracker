"use client";

export const NewTaskModal = (props: any) => {
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
    </div>
  );
};
