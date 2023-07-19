"use client";

import { useState } from "react";
import EachList from "./EachList";

const data = [
  {
    name: "To Do",
    numberTasks: 4,
    tasks: [
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
      {
        name: "Design system ",
        description: "Description",
        progress: 0,
        assignedUser: "Daniel",
        startDate: new Date(2022, 6, 28),
        endDate: new Date(2023, 8, 1),
      },
    ],
  },
  {
    name: "In Progress",
    numberTasks: 14,
    tasks: [
      {
        name: "Design system 2",
        description: "Description 2",
        progress: 40,
        assignedUser: "Daniel",
        startDate: new Date(2022, 7, 10),
        endDate: new Date(2023, 7, 30),
      },
    ],
  },
  {
    name: "Done",
    numberTasks: 0,
    tasks: [],
  },
];

export default function ListWork() {
  const [lists, setLists] = useState(data);
  return (
    <div className="flex-grow lgxl:justify-center space-y-2 lgxl:space-y-0 flex-col lgxl:flex-row flex p-5 lgxl:space-x-5 2xl:space-x-10 bg-[#f5f9fc]">
      {lists.map((list, i) => (
        /* @ts-ignore */
        <EachList key={i} list={list} />
      ))}
    </div>
  );
}
