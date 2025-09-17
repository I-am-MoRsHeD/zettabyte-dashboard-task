"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { routes } from "@/app/static/routes";

const Sidebar = () => {
  const pathname = usePathname();

  return (
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
              className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive
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
  );
};

export default Sidebar;
