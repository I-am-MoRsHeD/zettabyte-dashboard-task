"use client";

import { stats } from "@/app/static/dashboard";
import { motion } from "framer-motion";

export default function DashboardPage() {
    const chartData = [30, 60, 45, 80, 50, 70, 90];
    return (
        <div className="p-8 space-y-8">
            {/* Animated Header */}
            <motion.h1
                className="text-3xl font-bold text-gray-800"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Welcome to the Dashboard
            </motion.h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.id}
                        className="bg-white rounded-2xl shadow p-6 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-600">
                            {stat.value}
                        </h2>
                        <p className="text-gray-500">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Animated Mini Chart */}
            <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Weekly Activity
                </h2>
                <div className="flex items-end gap-4 h-40">
                    {chartData.map((value, index) => (
                        <motion.div
                            key={index}
                            className="w-8 bg-orange-500 rounded"
                            initial={{ height: 0 }}
                            animate={{ height: `${value}%` }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
