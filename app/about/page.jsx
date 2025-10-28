"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Hi 👋 I’m <span className="font-semibold text-indigo-500">Prachi Gupta</span>, a passionate Frontend Developer who loves
                        building modern, responsive, and performant web applications using Next.js and React.
                    </p>
                </motion.div>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="https://avatars.githubusercontent.com/u/0000000?v=4" // replace with your GitHub or real image URL
                            alt="Prachi Gupta"
                            width={180}
                            height={180}
                            className="rounded-full border-4 border-indigo-500 shadow-md"
                        />
                    </motion.div>

                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                            Frontend Developer • React • Next.js
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            I enjoy transforming designs into functional, beautiful user interfaces. Currently, I’m enhancing my Next.js skills and exploring new technologies like TypeScript and Tailwind CSS.
                        </p>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <section>
                    <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                        My Tech Stack
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        <SkillCard icon={<FaReact size={40} color="#61DBFB" />} name="React" />
                        <SkillCard icon={<SiNextdotjs size={40} />} name="Next.js" />
                        <SkillCard icon={<SiTailwindcss size={40} color="#38BDF8" />} name="Tailwind CSS" />
                        <SkillCard icon={<FaNodeJs size={40} color="#3C873A" />} name="Node.js" />
                        <SkillCard icon={<FaGithub size={40} />} name="GitHub" />
                    </div>
                </section>
            </div>
        </main>
    );
}

function SkillCard({ icon, name }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
        >
            {icon}
            <p className="mt-3 text-gray-700 dark:text-gray-200 font-medium">{name}</p>
        </motion.div>
    );
}
