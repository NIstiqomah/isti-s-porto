"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Layers,
  Cloud,
  Palette,
  Boxes
} from 'lucide-react';

interface Tech {
  name: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

const techStack: Tech[] = [
  {
    name: 'Core Stack',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    items: [
      'JavaScript', 'TypeScript',
      'React.js', 'Next.js',
      'Laravel',
      'REST API'
    ]
  },
  {
    name: 'Frontend',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    items: [
      'HTML', 'CSS',
      'Bootstrap', 'Material UI', 'Tailwind'
    ]
  },
  {
    name: 'Backend',
    icon: <Database className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    items: [
      'Laravel', 'CodeIgniter',
      'Next.js',
      'RESTful API',
    ]
  },
  {
    name: 'Database',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    items: [
      'SQL Server',
      'PostgreSQL',
      'MySQL'
    ]
  },
  {
    name: 'Tools',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    items: [
      'Git', 'GitHub',
      'Postman',
      'Katalon'
    ]
  },
  {
    name: 'Additional',
    icon: <Boxes className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-500',
    items: [
      'Public Speaking',
      'English (TOEFL ITP 513)'
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Tech <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${tech.color} rounded-2xl mb-4 text-white shadow-lg`}>
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl mb-4">{tech.name}</h3>

                {/* Items */}
                <ul className="space-y-2">
                  {tech.items.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {[
              "System Analysis",
              "Requirement Analysis",
              "Business Logic Implementation",
              "SQL & Data Querying",
              "API Integration",
              "End-to-End Development",
              "Debugging & Troubleshooting",
              "Testing & Validation",
              "Responsive UI Development",
              "Problem Solving"
            ].map(skill => (
              <span
                key={skill}
                className="px-5 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
