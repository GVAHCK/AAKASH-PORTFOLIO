'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Quality = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export const Qualities = () => {
  const qualities: Quality[] = [
    {
      title: 'Cloud Security',
      description:
        'Hands-on experience securing Azure infrastructure with RBAC, NSGs, and monitoring. Building resilient cloud architectures that protect critical data.',
      icon: '☁️',
      color: 'from-teal-500/20 to-teal-500/5',
    },
    {
      title: 'Cybersecurity Monitoring',
      description:
        'Skilled in using Splunk for incident detection, log analysis, and alert validation. Experienced in root cause analysis and improving incident response efficiency.',
      icon: '🔒',
      color: 'from-cyan-500/20 to-cyan-500/5',
    },
    {
      title: 'Blockchain Development',
      description:
        'Building decentralized systems with Holochain and Solidity. Designing fault-tolerant architectures that eliminate centralized control points.',
      icon: '⛓️',
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      title: 'Problem Solving',
      description:
        'Smart India Hackathon 2025 Runner-Up and Prajwalan 2K25 Third Prize Winner. Proven ability to build solutions for real-world healthcare and government use cases.',
      icon: '🏆',
      color: 'from-purple-500/20 to-purple-500/5',
    },
    {
      title: 'Technical Expertise',
      description:
        'Proficient in Python, Java, C++, JavaScript, and Solidity. Experienced with Azure, AWS, ReactJS, NodeJS, FastAPI, MongoDB, and MySQL.',
      icon: '⚙️',
      color: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
      title: 'Community Leadership',
      description:
        'Google Student Ambassador at SRKR Engineering College. Tech Team Member of ACE. Organized and coordinated Prajwalan 2K26 Hackathon.',
      icon: '🤝',
      color: 'from-teal-500/20 to-teal-500/5',
    },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="qualities" className="w-full mt-28">
      <h2 className="flex items-center text-3xl font-bold mb-6">
        <span className="mr-4">What I</span>
        <span className="text-teal-400 mr-3">Bring to the Table</span>
        <div className="h-px bg-gray-600 grow" />
      </h2>
      <p className="text-gray-400 mb-12 text-lg max-w-2xl">
        My core strengths that drive success in cloud security and cybersecurity
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualities.map((quality, index) => (
          <motion.div
            key={quality.title}
            className="h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={index}
          >
            <motion.div
              className={
                'h-full bg-slate-900/60 rounded-xl border border-slate-800 p-6 hover:border-teal-500/50 transition-all duration-300 flex flex-col overflow-hidden relative group'
              }
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4 text-4xl">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {quality.icon}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-teal-400">
                  {quality.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {quality.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 size-16 text-slate-800/30 flex items-center justify-center">
                  <div className="absolute rotate-45 size-20 h-2 bg-slate-700/30 -bottom-6 -right-6 group-hover:bg-teal-500/20 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
