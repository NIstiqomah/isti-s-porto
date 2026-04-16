"use client"

import { motion } from "framer-motion"
import { Code2, Download, Eye, Sparkles } from 'lucide-react';
import { getProfile } from "@/lib/data"
import Image from "next/image";
import { Sparkle as SparkleIcon } from "lucide-react"; // Rename agar tidak bentrok
import { useEffect, useMemo, useState } from "react";

export default function Hero() {
    const profile = getProfile()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const Sparkle = ({ delay }: { delay: number }) => {
        const random = useMemo(() => ({
            x: Math.random() * 100 - 50,
            y: Math.random() * -150,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 3 + Math.random() * 2,
        }), [])

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    x: [0, random.x],
                    y: [0, random.y],
                }}
                transition={{
                    duration: random.duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                }}
                className="absolute w-1 h-1 bg-purple-500 rounded-full blur-[1px]"
                style={{
                    left: random.left,
                    top: random.top,
                }}
            />
        )
    }

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">

                {/* LEFT: TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-700">
                            Available for freelance
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-5xl md:text-6xl mb-6 leading-tight"
                    >
                        Hi, I&apos;m{' '}
                        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                            {profile.name}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl text-gray-700 mb-8 leading-relaxed"
                    >
                        {profile.summary}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex gap-4"
                    >
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <a
                                href="/cv.pdf"
                                download="Nurul_Istiqomah_CV.pdf"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                <span>Download CV</span>
                            </a>

                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-xl hover:shadow-lg hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-300 border-2 border-gray-200"
                            >
                                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                <span>View CV</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="relative flex items-center justify-center min-h-[500px]">
                    {/* Container Efek Sparkling (Random Particles) */}
                    <div className="absolute inset-0 pointer-events-none">
                        {mounted &&
                            [...Array(20)].map((_, i) => (
                                <Sparkle key={i} delay={i * 0.2} />
                            ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        {/* Parallax & Floating Animation Wrapper */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [-1, 1, -1]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative flex items-center justify-center"
                        >
                            {/* --- PERUBAHAN DISINI: Cincin berlapis dan border utama DIHAPUS --- */}
                            {/* Cukup gunakan div wrapper tanpa padding/border/bg solid */}
                            <div className="relative rounded-full aspect-square flex items-center justify-center bg-transparent">
                                <motion.div
                                    whileHover={{ scale: 1.08, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 150 }}
                                    className="relative z-20"
                                >
                                    <Image
                                        src="/avatar_portfolio.png"
                                        alt="Avatar"
                                        width={400}
                                        height={400}
                                        priority
                                        className="object-contain w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]"
                                    />
                                </motion.div>
                            </div>

                            {/* Efek Cahaya Ambient di belakang Avatar tetap dipertahankan (opsional) */}
                            <div className="absolute -z-10 w-full h-full bg-purple-500/10 rounded-full blur-[60px]"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}