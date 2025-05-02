"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressChart from './ProgressChart';
import HabitCard from './HabitCard';

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [habits, setHabits] = useState<{ title: string; streak: number; completed: boolean; onToggle: () => void }[]>([]);
    const [isProcessChartModalOpen, setIsProcessChartModalOpen] = useState(false);
    const [isHabitCardModalOpen, setIsHabitCardModalOpen] = useState(false);
    const [isDailyCheckModalOpen, setIsDailyCheckModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [iscontactMessageModalOpen, setContactMessageModelOpen] = useState(false);
    const [chartData, setChartData] = useState<{ date: string; completed: number }[]>([
        {
            date: "2023-10-01",
            completed: 1,
        },
        {
            date: "2023-10-02",
            completed: 0,
        },
        {
            date: "2023-10-03",
            completed: 1,
        },
        {
            date: "2023-10-04",
            completed: 0,
        },
    ]);

    const [dailyCheckData, setDailyCheckData] = useState([
        { habit: "Drink Water", completed: true },
        { habit: "Exercise", completed: false },
        { habit: "Read a Book", completed: true },
    ]);

    const [submitFormData, setSubmitFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    return (
        <nav className="fixed top-0 w-full max-w-full mx-auto flex flex-col md:flex-row justify-between items-center p-4 bg-white text-purple-500 shadow-md z-50 h-auto md:h-24 border-b rounded-b-3xl font-poppins">
            <div className="flex w-full h-16 md:w-auto justify-between items-center">
                <div className="text-md text-2xl md:text-3xl lg:text-5xl font-light bg-gradient-to-r from-purple-600 via-purple-400 via-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent relative overflow-hidden group hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 translate-x-[-100%] translate-y-[100%] transition-all duration-700 ease-in-out group-hover:translate-x-[100%] group-hover:translate-y-[-100%] group-hover:opacity-75"></div>
                    <span className="font-semibold">Habit Tracker</span>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0`}>
                <button
                    onClick={() => setIsProcessChartModalOpen(true)}
                    className="px-4 py-2 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 w-full md:w-auto"
                >
                    Process Chart
                </button>
                <button
                    onClick={() => setIsHabitCardModalOpen(true)}
                    className="px-4 py-2 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 w-full md:w-auto"
                >
                    Habit Card
                </button>
                <button
                    onClick={() => setIsDailyCheckModalOpen(true)}
                    className="px-4 py-2 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 w-full md:w-auto"
                >
                    Daily Check
                </button>
                <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-4 py-2 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 w-full md:w-auto"
                >
                    Contact
                </button>
            </div>

            {/* Process Chart Modal */}
            {isProcessChartModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className="bg-white p-8 rounded-lg w-full">
                        <button
                            onClick={() => setIsProcessChartModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Process Chart</h2>
                        <ProgressChart data={chartData} />
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formElement = e.target as HTMLFormElement;
                                const formData = new FormData(formElement);
                                const newEntry = {
                                    date: formData.get("date") as string,
                                    completed: parseInt(formData.get("completed") as string, 10) || 0,
                                };
                                formElement.reset();
                                setChartData((prevData) => [...prevData, newEntry]);
                            }}
                            className="flex flex-col gap-2 mt-4"
                        >
                            <input
                                type="date"
                                name="date"
                                className="border border-gray-300 rounded px-4 py-2"
                                required
                            />
                            <input
                                type="number"
                                name="completed"
                                placeholder="Enter completed count"
                                className="border border-gray-300 rounded px-4 py-2"
                                min="0"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200"
                            >
                                Today&apos;s Entry
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
            {isHabitCardModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className="bg-white p-8 rounded-lg w-full max-w-4xl relative">
                        <button
                            onClick={() => setIsHabitCardModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Habit Card</h2>
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-4">
                                {/* Static Habit Cards */}
                                {[
                                    { title: "Drink Water", streak: 5, completed: true, onToggle: () => console.log("Toggled Drink Water") },
                                    { title: "Exercise", streak: 3, completed: false, onToggle: () => console.log("Toggled Exercise") },
                                    { title: "Read a Book", streak: 7, completed: true, onToggle: () => console.log("Toggled Read a Book") },
                                ].map((habit, index) => (
                                    <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-2">
                                        <HabitCard
                                            data={[habit]}
                                        />
                                    </div>
                                ))}

                                {/* Dynamic Habit Cards */}
                                {habits.map((habit, index) => (
                                    <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-2">
                                        <HabitCard
                                            data={[habit]}
                                        />
                                    </div>
                                ))}
                            </div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formElement = e.target as HTMLFormElement;
                                    const formData = new FormData(formElement);
                                    const newHabit = {
                                        title: formData.get("title") as string,
                                        streak: parseInt(formData.get("streak") as string, 10) || 0,
                                        completed: formData.get("completed") === "true",
                                        onToggle: () => console.log(`Toggled ${formData.get("title")}`),
                                    };
                                    formElement.reset();
                                    setHabits((prevHabits) => [...prevHabits, newHabit]);
                                }}
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter habit title"
                                    className="border border-gray-300 rounded px-4 py-2"
                                    required
                                />
                                <input
                                    type="number"
                                    name="streak"
                                    placeholder="Enter streak count"
                                    className="border border-gray-300 rounded px-4 py-2"
                                    min="0"
                                    required
                                />
                                <select
                                    name="completed"
                                    className="border border-gray-300 rounded px-4 py-2"
                                    required
                                >
                                    <option value="false">Not Completed</option>
                                    <option value="true">Completed</option>
                                </select>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200"
                                >
                                    Add Habit
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            )}
            {isDailyCheckModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className="bg-white p-8 rounded-lg max-w-md relative">
                        <button
                            onClick={() => setIsDailyCheckModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Daily Check</h2>
                        <ul className="space-y-2">
                            {dailyCheckData.map((item, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>{item.habit}</span>
                                    <span
                                        className={`px-2 py-1 rounded ${item.completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                            }`}
                                    >
                                        {item.completed ? 'Completed' : 'Not Completed'}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formElement = e.target as HTMLFormElement;
                                const formData = new FormData(formElement);
                                const newDailyCheck = {
                                    habit: formData.get("habit") as string,
                                    completed: formData.get("completed") === "true",
                                };
                                formElement.reset();
                                setDailyCheckData((prevData) => [...prevData, newDailyCheck]); // Update the state
                            }}
                            className="flex flex-col gap-2 mt-4"
                        >
                            <input
                                type="text"
                                name="habit"
                                placeholder="Enter habit name"
                                className="border border-gray-300 rounded px-4 py-2"
                                required
                            />
                            <select
                                name="completed"
                                className="border border-gray-300 rounded px-4 py-2"
                                required
                            >
                                <option value="false">Not Completed</option>
                                <option value="true">Completed</option>
                            </select>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200"
                            >
                                Add Daily Check
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
            {/* Contact Modal */}
            {isContactModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className="bg-white p-8 rounded-lg max-w-md relative">
                        <button
                            onClick={() => setIsContactModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Contact</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formElement = e.target as HTMLFormElement;
                                const formData = new FormData(formElement);
                                const contactDetails = {
                                    name: formData.get("name") as string,
                                    email: formData.get("email") as string,
                                    message: formData.get("message") as string,
                                };
                                formElement.reset();
                                setSubmitFormData(contactDetails);
                                setIsContactModalOpen(false);
                                setContactMessageModelOpen(true);
                            }}
                            className="flex flex-col gap-2 mt-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="border border-gray-300 rounded px-4 py-2"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="border border-gray-300 rounded px-4 py-2"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                className="border border-gray-300 rounded px-4 py-2"
                                rows={4}
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}

            {iscontactMessageModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className="bg-white p-8 rounded-lg max-w-md relative">
                        <button
                            onClick={() => setContactMessageModelOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Message Submitted</h2>
                        <p className="text-gray-700 mb-2"><strong>Name:</strong> {submitFormData.name}</p>
                        <p className="text-gray-700 mb-2"><strong>Email:</strong> {submitFormData.email}</p>
                        <p className="text-gray-700"><strong>Message:</strong> {submitFormData.message}</p>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;