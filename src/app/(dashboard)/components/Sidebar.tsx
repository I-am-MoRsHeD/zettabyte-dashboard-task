'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { routes } from "@/static/routes";
import { useSidebar } from "@/context/SidebarContext";

const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`h-full bg-gray-100 border-r-[2px] border-orange-600 rounded-r-lg transition-all duration-500 overflow-hidden
    ${isSidebarOpen ? "w-64 p-4" : "w-0 p-0"}`}>
      <p>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 28V12C30 10.8954 29.1046 10 28 10H27.8994C27.369 10 26.8604 10.2109 26.4854 10.5859L10.5859 26.4854C10.2109 26.8604 10 27.369 10 27.8994V40H0V27.8994C2.15312e-05 24.7168 1.26423 21.6645 3.51465 19.4141L19.4141 3.51465C21.6645 1.26423 24.7168 2.1373e-05 27.8994 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H14V30H28C29.1046 30 30 29.1046 30 28Z M0 0H17L7 10H0V0Z" fill="#FF4D00"></path>
        </svg>
      </p>
      <div className="flex flex-col gap-8 my-5 w-full">
        {routes.map((route) => {
          const isActive = pathname.includes(route.path);

          return (
            <motion.div
              key={route.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: route.id * 0.1 }}
            >
              <Link
                href={route.path}
                className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${isActive
                  ? "bg-orange-600 text-white font-semibold"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                {route.name}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
