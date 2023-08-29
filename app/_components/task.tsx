export const Task = (props: any) => {
  const { task }: any = props;
  const date = new Date(task.updatedAt).toLocaleString();
  return (
    <div className="w-[800px] h-[100px] bg-[#704E2E] my-2 px-8 py-4 rounded-full flex">
      <div className="flex flex-col justify-center mr-2">
        {task.priority === "high" ? (
          <div
            className={`rounded-full px-2 py-1 border-2 border-red-800 bg-red-700 cursor-pointer w-20 text-center text-lg
            `}
          >
            high
          </div>
        ) : task.priority === "moderate" ? (
          <div
            className={`rounded-full px-2 py-1 border-2 border-yellow-800 bg-yellow-700 cursor-pointer w-20 text-center text-lg
            `}
          >
            moderate
          </div>
        ) : (
          <div
            className={`rounded-full px-2 py-1 border-2 border-green-800 bg-green-700 cursor-pointer w-20 text-center text-lg
            `}
          >
            low
          </div>
        )}
      </div>
      <div>
        <div className="text-xl font-pacifico">{task.title}</div>
        <div className="text-lg line-clamp-1">{task.description}</div>
        <div>{date}</div>
      </div>
      <div>other buttons on right</div>
    </div>
  );
};
