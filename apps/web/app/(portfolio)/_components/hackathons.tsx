'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';

const hackathons = [
    {
        title: 'Smart India Hackathon 2025',
        position: 'Runner-Up 🥈',
        description:
            'Competed at the national level in SIH 2025, building an innovative solution that stood out among thousands of teams across India. Demonstrated excellence in problem solving, rapid prototyping, and team collaboration under pressure.',
        tags: ['National Level', 'Government of India', 'Innovation'],
        gradient: 'from-amber-400 via-yellow-500 to-orange-500',
        borderGlow: 'hover:shadow-amber-500/20',
    },
    {
        title: 'Prajwalan 2K25',
        position: 'Runner-Up 🥈',
        description:
            'Secured runner-up position at Prajwalan 2K25 hackathon, showcasing technical expertise in building real-world solutions. Excelled in ideation, system design, and delivering a polished prototype within the competition timeline.',
        tags: ['Inter-College', 'Tech Fest', 'Hackathon'],
        gradient: 'from-teal-400 via-cyan-500 to-blue-500',
        borderGlow: 'hover:shadow-teal-500/20',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export function Hackathons() {
    return (
        <section id="hackathons" className="w-full py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Trophy className="size-8 text-amber-400" />
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
                        Hackathons
                    </h2>
                </div>
                <p className="text-neutral-400 text-lg max-w-2xl">
                    Competitive achievements that demonstrate my ability to build innovative solutions under pressure.
                </p>
            </motion.div>

            <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                {hackathons.map((hack) => (
                    <motion.div
                        key={hack.title}
                        variants={itemVariants}
                        className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm hover:border-neutral-700 transition-all duration-500 hover:shadow-lg ${hack.borderGlow}`}
                    >
                        {/* Background gradient effect */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${hack.gradient} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500`}
                        />

                        <div className="relative p-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`size-14 rounded-xl bg-gradient-to-br ${hack.gradient} p-[1.5px]`}
                                    >
                                        <div className="size-full rounded-xl bg-neutral-900 flex items-center justify-center">
                                            <Medal className="size-7 text-neutral-200" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                                            {hack.title}
                                        </h3>
                                        <span
                                            className={`text-lg font-semibold bg-gradient-to-r ${hack.gradient} bg-clip-text text-transparent`}
                                        >
                                            {hack.position}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-neutral-400 leading-relaxed mb-5 max-w-3xl">
                                {hack.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {hack.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800/80 text-neutral-300 border border-neutral-700/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
