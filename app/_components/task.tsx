export const Task = (props: any) => {
  const { task }: any = props;
  return (
    <div className="w-[800px] h-[100px] bg-[#704E2E] my-2 px-8 py-4 rounded-full">
      <div className="text-xl font-pacifico">{task.title}</div>
      <div className="text-lg">{task.description}</div>
    </div>
  );
};
