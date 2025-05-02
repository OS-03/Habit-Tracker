"use client";
import React, { useState, useEffect, useCallback } from "react";

const Counter: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [counts, setCounts] = useState({
        users: 0,
        habits: 0,
        success: 0
    });

    const updateCounts = useCallback(() => {
        setCounts(prev => ({
            users: prev.users >= 10000 ? 10000 : prev.users + 100,
            habits: prev.habits >= 50000 ? 50000 : prev.habits + 500,
            success: prev.success >= 95 ? 95 : prev.success + 1
        }));
    }, []);

    useEffect(() => {
        setIsMounted(true);
        if (isMounted) {
            const interval = setInterval(updateCounts, 7);
            return () => clearInterval(interval);
        }
    }, [isMounted, updateCounts]);

    return (
        <div className="relative bg-white/50 rounded-xl p-8 backdrop-blur-sm">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute w-[200%] aspect-[2/1] top-[-5%] left-[70%] -translate-x-1/2 bg-purple-200/30 rounded-[100%]" />
                <div className="absolute w-[180%] aspect-[2/1] top-[5%] left-[60%] -translate-x-1/2 bg-purple-300/20 rounded-[100%]" />
                <div className="absolute w-[160%] aspect-[2/1] top-[20%] left-[80%] -translate-x-1/2 bg-purple-400/15 rounded-[100%]" />
            </div>
            <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 rounded-3xl bg-purple-500 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer border-4 border-purple-300 backdrop-blur-sm">
                        <h3 className="text-5xl font-bold text-white mb-3 drop-shadow-lg text-shadow">
                            {counts.users.toLocaleString()}+
                        </h3>
                        <p className="text-purple-100 text-lg">Active Users</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-purple-300 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer border-4 border-purple-500 backdrop-blur-sm">
                        <h3 className="text-5xl font-bold text-white mb-3">
                            {counts.habits.toLocaleString()}+
                        </h3>
                        <p className="text-purple-100 text-lg">Habits Tracked</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-purple-400 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer border-4 border-purple-200 backdrop-blur-sm">
                        <h3 className="text-5xl font-bold text-white mb-3">
                            {counts.success}%
                        </h3>
                        <p className="text-purple-100 text-lg">Success Rate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;