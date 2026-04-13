"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Coffee } from 'lucide-react';
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    user_name: (form.elements.namedItem("user_name") as HTMLInputElement).value,
                    user_email: (form.elements.namedItem("user_email") as HTMLInputElement).value,
                    project_type: (form.elements.namedItem("project_type") as HTMLSelectElement).value,
                    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            setSuccess(true)
            form.reset()
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <section id="contact" className="px-6 py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-4">
                        Let&apos;s Work <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Together</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Got a project in mind? Let&apos;s grab a virtual coffee and chat about it! ☕️
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Email me at</div>
                                    <a href="mailto:istiqomahh.nurull@gmail.com" className="text-lg text-gray-800 hover:text-purple-600 transition-colors">
                                        istiqomahh.nurull@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Based in</div>
                                    <div className="text-lg text-gray-800">East Jakarta, Indonesia (Open to Remote Work)</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white">
                                    <Coffee className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Availability</div>
                                    <div className="text-lg text-gray-800">Open to Opportunities & Collaboration</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="text-sm text-gray-500 mb-4">Let&apos;s connect</div>
                            <div className="flex gap-4">

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/nurul-istiqomah-33a0b51a6/"
                                    className="icon-btn group from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 cursor-pointer"
                                >
                                    <FaLinkedinIn className="w-6 h-6 text-blue-600 group-hover:scale-110 transition" />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/isstttii"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-btn group from-pink-50 to-purple-100 hover:from-pink-100 hover:to-purple-200 cursor-pointer"
                                >
                                    <FaInstagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition" />
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/6285655123150"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-btn group from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 cursor-pointer"
                                >
                                    <FaWhatsapp className="w-6 h-6 text-green-600 group-hover:scale-110 transition" />
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border rounded-2xl"
                                />
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border rounded-2xl"
                                />
                                <select
                                    name="project_type"
                                    className="w-full px-5 py-4 bg-gray-50 border rounded-2xl"
                                >
                                    <option>Web Application Development</option>
                                    <option>Quality Assurance / Testing</option>
                                    <option>System Analysis</option>
                                    <option>UI/UX Improvement</option>
                                    <option>Other</option>
                                </select>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border rounded-2xl"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    {loading ? "Sending..." : "Send Message 🚀"}
                                </button>
                                {success && (
                                    <p className="text-green-500 text-sm text-center">
                                        ✅ Message sent successfully!
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16 pt-8 border-t border-gray-200"
                >
                    <p className="text-gray-500">
                        Made with ❤️ and lots of ☕ by Isti © 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
}