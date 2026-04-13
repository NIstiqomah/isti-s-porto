"use client"

import { motion } from "framer-motion"
import { Heart, Coffee, Lightbulb } from 'lucide-react';
import Image from "next/image"

export default function About() {
    return (
        <section className="px-6 py-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-center">
                        My <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Story</span>
                    </h2>
                    <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
                        How I went from curiosity to creating digital experiences
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1535930735840-f3c6a645f80d"
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Right: Story */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <Lightbulb className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">The Beginning</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        It all started when I was 14, trying to customize my MySpace page.
                                        That curiosity sparked a passion that turned into a career. I&apos;ve been
                                        building things on the web ever since.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <Coffee className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">The Journey</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        From freelance projects to startups, I&apos;ve worn many hats. Each project
                                        taught me something new—not just about code, but about people, design,
                                        and solving real problems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <Heart className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">The Mission</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Today, I help businesses and individuals bring their ideas to life.
                                        I believe great software should be both powerful and delightful to use.
                                        Let&apos;s build something amazing together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}