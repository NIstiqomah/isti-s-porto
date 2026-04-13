import { getSkills } from "@/lib/data"

export default function Skills() {
    const skills = getSkills()

    return (
        <section className="py-20 bg-[#0B1220]">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-10">
                    Tech Stack
                </h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-[#111827] text-sm rounded-lg 
              border border-gray-700 
              hover:border-purple-500 hover:text-purple-400
              transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    )
}