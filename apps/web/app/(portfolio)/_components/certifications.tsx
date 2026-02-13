'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Lock, Database, Globe } from 'lucide-react';

const certifications = [
    {
        title: 'EC-Council SOC Analyst',
        issuer: 'EC-Council',
        icon: ShieldCheck,
        color: 'from-red-500 to-orange-500',
        description: 'Security Operations Center Analyst certification covering threat monitoring, incident response, and SIEM operations.',
    },
    {
        title: 'AWS Summer Internship Course',
        issuer: 'APSSDC',
        icon: Cloud,
        color: 'from-amber-500 to-yellow-500',
        description: 'Comprehensive AWS cloud services training including EC2, S3, Lambda, and cloud architecture fundamentals.',
    },
    {
        title: 'Cyber Security Intern',
        issuer: 'Elevate Labels',
        icon: Lock,
        color: 'from-teal-500 to-cyan-500',
        description: 'Hands-on cyber security internship covering vulnerability assessment, penetration testing, and security best practices.',
    },
    {
        title: 'Cyber Security Fundamentals',
        issuer: 'Tech Mahindra',
        icon: ShieldCheck,
        color: 'from-blue-500 to-indigo-500',
        description: 'Foundation-level certification in cyber security principles, threat landscapes, and defense mechanisms.',
    },
    {
        title: 'Azure VM Creation',
        issuer: 'Coursera',
        icon: Cloud,
        color: 'from-blue-400 to-blue-600',
        description: 'Practical certification on deploying and managing virtual machines on Microsoft Azure cloud platform.',
    },
    {
        title: 'Cyber Security & Network Security',
        issuer: 'Forage',
        icon: Globe,
        color: 'from-emerald-500 to-green-500',
        description: 'Virtual experience program covering network security protocols, firewall configuration, and cyber threat analysis.',
    },
    {
        title: 'Data Science Fundamentals',
        issuer: 'Forage',
        icon: Database,
        color: 'from-purple-500 to-violet-500',
        description: 'Foundation in data science methodologies, statistical analysis, and data-driven decision making.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export function Certifications() {
    return (
        <section id="certifications" className="w-full py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Award className="size-8 text-teal-400" />
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
                        Certifications
                    </h2>
                </div>
                <p className="text-neutral-400 text-lg max-w-2xl">
                    Professional certifications and courses that validate my expertise in cloud computing, cybersecurity, and data science.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                {certifications.map((cert) => {
                    const Icon = cert.icon;
                    return (
                        <motion.div
                            key={cert.title}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-6 hover:border-neutral-700 transition-all duration-300"
                        >
                            {/* Gradient accent line */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                            />

                            <div className="flex items-start gap-4">
                                <div
                                    className={`flex-shrink-0 size-12 rounded-lg bg-gradient-to-br ${cert.color} p-[1px]`}
                                >
                                    <div className="size-full rounded-lg bg-neutral-900 flex items-center justify-center">
                                        <Icon className="size-5 text-neutral-300 group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
                                        {cert.title}
                                    </h3>
                                    <span className="inline-block mt-1 px-2.5 py-0.5 text-xs font-medium rounded-full bg-neutral-800 text-teal-400 border border-neutral-700">
                                        {cert.issuer}
                                    </span>
                                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
