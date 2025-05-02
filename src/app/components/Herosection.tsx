"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import Counter from './Counter';
import Footer from './Footer';
import Image from 'next/image';

const HeroSection = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="w-full h-full font-['Poppins']">
            <Navbar />
            <div className="absolute inset-0 -z-10 h-full w-full bg-transparent [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#63e_100%)]">
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center pb-20 text-justify">
                    <motion.h1
                        {...fadeIn}
                        className="py-5 mt-31 text-3xl text:md md:text-5xl font-bold tracking-tight text-gray-800 mb-6 font-['Poppins']"
                    >
                        Track Your Daily <span className="text-purple-400">Habits</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-gray-600 mb-8 max-w-2xl text-justify px-3 font-['Poppins'] text-justify"
                    >
                        Build better habits, achieve your goals, and transform your life with our
                        simple and effective habit tracking system. Our intuitive platform helps
                        you establish and maintain positive routines that lead to lasting change.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-full mb-3"
                    >
                        <Counter />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 mb-3"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('getStartedModal')?.classList.remove('hidden')}
                            className="rounded-lg px-6 py-3 font-medium bg-purple-500 text-white hover:bg-purple-700 transition-all duration-200"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('learnMoreModal')?.classList.remove('hidden')}
                            className="rounded-lg border px-6  font-medium border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-all duration-200"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>

                {/* Modals with Framer Motion */}
                <motion.div
                    id="getStartedModal"
                    className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="bg-white p-8 rounded-lg max-w-md text-justify">
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Get Started</h2>
                        <p className="mb-4 font-['Poppins']">Ready to begin your journey? Create an account or sign in to start tracking your habits!</p>
                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('getStartedModal')?.classList.add('hidden')}
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200"
                            >
                                Close
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    id="learnMoreModal"
                    className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="bg-white p-8 rounded-lg max-w-md text-justify">
                        <h2 className="text-2xl font-bold mb-4 font-['Poppins']">Learn More</h2>
                        <p className="mb-4 font-['Poppins']">Our habit tracking system helps you build lasting habits through consistent tracking and insights. Start small, stay consistent, and watch your progress grow!</p>
                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('learnMoreModal')?.classList.add('hidden')}
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200"
                            >
                                Close
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
                <div className="mt-3">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-['Poppins'] text-purple-700"
                    >
                        What Our Users Say
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                name: "John Doe",
                                profession: "Software Engineer",
                                feedback: "This app has completely transformed my daily routine. Highly recommended!",
                                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                name: "Jane Smith",
                                profession: "Graphic Designer",
                                feedback: "I love how simple and effective this habit tracker is. It's a game-changer!",
                                image: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                name: "Alex Johnson",
                                profession: "Entrepreneur",
                                feedback: "Building habits has never been easier. This app keeps me motivated every day!",
                                image: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                name: "Emily Davis",
                                profession: "Teacher",
                                feedback: "The insights and tracking features are amazing. I've made so much progress!",
                                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                name: "Michael Brown",
                                profession: "Marketing Specialist",
                                feedback: "A must-have app for anyone looking to improve their habits and stay consistent.",
                                image: "https://plus.unsplash.com/premium_photo-1663040111191-c585a609fd9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJyb3duJTIwb2ZmaWNlJTIwbWFufGVufDB8fDB8fHww"
                            },
                            {
                                name: "Sophia Wilson",
                                profession: "Data Scientist",
                                feedback: "I can't believe how much this app has helped me stay on track. It's incredible!",
                                image: "https://images.unsplash.com/photo-1615793802337-13401406c3ea?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index, duration: 0.6 }}
                                className="bg-white pt-5 rounded-lg shadow-lg max-w-sm text-center"
                            >
                                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={500} // Set appropriate width
                                        height={300} // Set appropriate height
                                        className="w-full h-full object-cover object-center-right transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                    />
                                </div>
                                <div className="relative bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-300 p-4 rounded-b-lg border-t border-purple-600">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {testimonial.profession}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-['Poppins']">
                                        <span className="text-shadow-md">{testimonial.name}</span>
                                    </h3>
                                    <p className="text-gray-600 font-['Poppins']">{testimonial.feedback}</p>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full text-center mt-7 px-3 bg-purple-100 py-5 rounded-lg"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 font-['Poppins']">
                            &quot;Consistency is the key to success - Start your journey today!&quot;
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HeroSection;

