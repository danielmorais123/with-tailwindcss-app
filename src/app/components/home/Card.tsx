import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "./ProgressBar";
import { faComment, faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function Card({ task }) {
  return (
    <div className="border rounded-lg p-2 cursor-pointer relative min-w-[300px] ">
      <FontAwesomeIcon
        icon={faEllipsis}
        className="absolute top-2 right-3 text-gray-500"
      />
      <p className="font-bold tracking-wide text-sm">{task.name}</p>
      <p className="mt-1 text-xs">{task.name}</p>
      <ProgressBar percentage={task.progress} />
      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs text-gray-500 w-fit">
          {task?.endDate.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <div>
          <div className="text-gray-500 flex items-center text-sm">
            <FontAwesomeIcon icon={faComment} className="mr-1" />
            <p className="">7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
