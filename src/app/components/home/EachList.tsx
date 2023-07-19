import Card from "./Card";

export default function EachList({ list }) {
  return (
    <div className="w-full xl:max-w-[350px] h-fit xl:h-full bg-white  rounded-2xl border-dashed border-2">
      <p className="text-gray-500 text-sm px-5 py-3 ">
        {list.name} ({list.numberTasks})
      </p>
      <hr />
      <div className="mt-2 lgxl:max-h-[700px] overflow-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
        <div className="space-x-4 pb-2 lgxl:space-x-0 lgxl:space-y-4 px-5 flex lgxl:flex-col">
          {list.tasks.map((task, i: number) => (
            <Card key={i} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
