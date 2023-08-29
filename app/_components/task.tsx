export const Task = (props: any) => {
  const { task, index }: any = props;
  const date = new Date(task.updatedAt).toLocaleString();
  return (
    <div
      className={`w-[800px] h-[100px]  my-2 px-8 py-4 rounded-full flex items-center justify-between cursor-pointer ${
        index % 2 === 0 ? "bg-[#704E2E]" : "bg-[#e7d7c1]"
      }`}
      onClick={()=>{
        props.setShowEditTaskModal(true)
        props.setClickIndex(index)
      }}
    >
      <div className="flex flex-col justify-center mr-2">
        {task.priority === "high" ? (
          <div
            className={`rounded-full px-2 py-1 border-2 border-red-800 bg-red-700 w-20 text-center text-lg
            `}
          >
            high
          </div>
        ) : task.priority === "moderate" ? (
          <div
            className={`rounded-full px-2 py-1 border-2 border-yellow-800 bg-yellow-700 w-20 text-center text-lg
            `}
          >
            moderate
          </div>
        ) : (
          <div
            className={`rounded-full px-2 py-1 border-2 border-green-800 bg-green-700 w-20 text-center text-lg
            `}
          >
            low
          </div>
        )}
      </div>
      <div className="w-[400px]">
        <div className="text-xl font-pacifico">{task.title}</div>
        <div className="text-lg line-clamp-1">{task.description}</div>
        <div>{date}</div>
      </div>
      <div>other buttons on right</div>
    </div>
  );
};
