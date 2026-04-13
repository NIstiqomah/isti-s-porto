"use client"

import { AnimatePresence, motion } from "framer-motion"
import { getProjects } from "@/lib/data"
import { AlertCircle, ArrowRight, ChevronDown, ChevronUp, Settings, TrendingUp, X } from "lucide-react"
import { useState } from "react"

export default function Projects() {
    const projects = getProjects()
    const [showAll, setShowAll] = useState(false);
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    const handleToggle = () => {
        if (showAll) {
            // Scroll to projects section when collapsing
            const projectsSection = document.getElementById('projects');
            projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setShowAll(!showAll);
    };

    const toggleCardExpansion = (title: string) => {
        setExpandedCard(expandedCard === title ? null : title);
    };

    return (
        <section id="projects" className="px-6 py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-4">
                        Featured <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Real problems, creative solutions, measurable impact
                    </p>
                </motion.div>

                {/* Projects Container with Gradient Overlay */}
                <div className="relative">
                    <motion.div
                        className="space-y-12"
                        layout
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence initial={false}>
                            {visibleProjects.map((project, index) => {
                                const isExpanded = expandedCard === project.title;

                                return (
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: showAll ? index * 0.1 : 0,
                                            layout: { duration: 0.3 }
                                        }}
                                        layout
                                    >
                                        <motion.div
                                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                            layout
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-8 md:p-10">
                                                {/* Header - Always Visible */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <div className={`text-4xl bg-gradient-to-br ${project.color} p-3 rounded-2xl shadow-md shrink-0`}>
                                                            <span className="block transform hover:scale-110 transition-transform">
                                                                {project.emoji}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl md:text-3xl mb-2">{project.title}</h3>
                                                            <p className="text-gray-600 line-clamp-2">{project.description}</p>
                                                        </div>
                                                    </div>

                                                    {/* Action Buttons - Always Visible */}
                                                    {/* <div className="flex gap-2 ml-4 shrink-0">
                            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                              <Github className="w-4 h-4 text-gray-700" />
                            </button>
                            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                              <ExternalLink className="w-4 h-4 text-gray-700" />
                            </button>
                          </div> */}
                                                </div>

                                                {/* Tags - Always Visible */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Expandable Case Study Details */}
                                                <AnimatePresence initial={false}>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <div className="border-t border-gray-200 pt-6 mt-2 space-y-6">
                                                                {/* Challenge Section */}
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.1, duration: 0.3 }}
                                                                    className="flex gap-4"
                                                                >
                                                                    <div className="shrink-0">
                                                                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                                                            <AlertCircle className="w-5 h-5 text-red-600" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <h4 className="text-sm uppercase tracking-wide text-red-600 mb-2">Challenge</h4>
                                                                        <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                                                                    </div>
                                                                </motion.div>

                                                                {/* Solution Section */}
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.2, duration: 0.3 }}
                                                                    className="flex gap-4"
                                                                >
                                                                    <div className="shrink-0">
                                                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                                                            <Settings className="w-5 h-5 text-blue-600" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <h4 className="text-sm uppercase tracking-wide text-blue-600 mb-2">Solution</h4>
                                                                        <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                                                                    </div>
                                                                </motion.div>

                                                                {/* Impact Section */}
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.3, duration: 0.3 }}
                                                                    className="flex gap-4"
                                                                >
                                                                    <div className="shrink-0">
                                                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                                                            <TrendingUp className="w-5 h-5 text-green-600" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <h4 className="text-sm uppercase tracking-wide text-green-600 mb-2">Impact</h4>
                                                                        <p className="text-gray-700 leading-relaxed">{project.impact}</p>
                                                                    </div>
                                                                </motion.div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* CTA Button */}
                                                <div className="mt-6">
                                                    <button
                                                        onClick={() => toggleCardExpansion(project.title)}
                                                        className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 ${isExpanded
                                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                            : `bg-gradient-to-r ${project.color} text-white hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5`
                                                            }`}
                                                    >
                                                        {isExpanded ? (
                                                            <>
                                                                <X className="w-4 h-4" />
                                                                <span>Collapse</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span>View Detailed Case Study</span>
                                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* Gradient Fade Overlay (visible when collapsed) */}
                    {!showAll && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-purple-50/80 to-transparent pointer-events-none"
                        />
                    )}
                </div>

                {/* Show All / Show Less Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mt-16"
                >
                    <button
                        onClick={handleToggle}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-xl hover:shadow-lg hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-300 border-2 border-gray-200"
                    >
                        <span className="text-base">
                            {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
                        </span>
                        {showAll ? (
                            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        ) : (
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                        )}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}