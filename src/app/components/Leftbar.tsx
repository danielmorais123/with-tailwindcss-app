"use client";

import {
  faHome,
  faChartSimple,
  faEnvelope,
  faCalendar,
  faUsers,
  faGear,
  faBell,
  faRightFromBracket,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Divider } from "@tremor/react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Leftbar() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const selectedTab = usePathname();

  const listTab = [
    { icon: faHome, title: "Dashboard", tabName: "/" },
    { icon: faListCheck, title: "Projects", tabName: "/projects" },
    { icon: faChartSimple, title: "Analytics", tabName: "/analytics" },
    { icon: faEnvelope, title: "Messages", tabName: "/messages" },
    { icon: faCalendar, title: "Calendar", tabName: "/calendar" },
    { icon: faUsers, title: "Users", tabName: "/users" },
  ];

  const listTabTwo = [
    { icon: faGear, title: "Settings", tabName: "/settings" },
    {
      icon: faBell,
      title: "Notifications",
      tabName: "/notifications",
      numberNotifications: 10,
    },
  ];

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div className="bg-white w-full max-w-[250px] hidden 2xl:flex flex-col border-r-[1px] border-gray-200">
      <div className="p-5">
        <img
          className="w-full object-contain"
          src="https://logosmarcas.net/wp-content/uploads/2020/08/Coca-Cola-Logo.png"
        />
      </div>
      <ul className="mt-5 ">
        {listTab.map((tab, index) => (
          <li
            key={index}
            onClick={() => router.push(tab.tabName)}
            className={` cursor-pointer tracking-wider flex items-center text-sm py-2.5 ${
              tab.tabName === selectedTab
                ? "border-l-2 border-blue-500 bg-[#f5f9fc] text-blue-500"
                : ""
            } `}
          >
            <div
              className={` ${selectedTab === tab.tabName ? "ml-4" : "ml-4"}`}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className={` ${
                  selectedTab === tab.tabName
                    ? "text-blue-500"
                    : "text-[#c0c2c4]"
                } ${
                  tab.title.toLowerCase() === "users"
                    ? "!w-[16px] object-contain"
                    : ""
                } mr-2 `}
              />
              {tab.title}
            </div>
          </li>
        ))}
      </ul>
      <Divider className="w-full bg-[#f7fafb]" />
      <ul className=" flex flex-col flex-grow  ">
        {listTabTwo.map((tab, index) => (
          <li
            key={index}
            onClick={() => router.push(tab.tabName)}
            className={` cursor-pointer tracking-wider flex items-center relative text-sm py-2.5 ${
              tab.tabName === selectedTab
                ? "border-l-2 border-blue-500 bg-[#f5f9fc] text-blue-500"
                : ""
            } `}
          >
            <div
              className={` ${selectedTab === tab.tabName ? "ml-4" : "ml-4"}`}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className={` ${
                  selectedTab === tab.tabName
                    ? "text-blue-500"
                    : "text-[#c0c2c4]"
                } ${
                  tab.title.toLowerCase() === "users"
                    ? "!w-[16px] object-contain"
                    : ""
                } mr-2 `}
              />
              {tab.title}
              <p className="absolute top-3 px-2 rounded-md text-blue-500 font-bold bg-blue-100 right-4 text-xs">
                {tab?.numberNotifications}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mb-3 w-[90%] mx-auto ">
        <button
          className=" bg-purple-300 transition-all hover:bg-purple-400 duration-500 w-full py-2 pl-2 text-white text-sm tracking-wider rounded-lg text-left "
          onClick={signOut}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="mr-2 " />
          Sign Out{" "}
        </button>
      </div>
    </div>
  );
}
