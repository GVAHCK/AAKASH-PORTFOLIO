'use client';
import React, { useState } from 'react';
import { Hexagon } from 'lucide-react';

// Experience data extracted for maintainability
const experiences = {
  genzgalaxy: {
    company: 'Gen-Z Galaxy Tech',
    role: 'Cloud & Security Intern',
    period: '2024 - 2025',
    location: 'Remote',
    description: [
      'Managed and secured Azure infrastructure including virtual machines, virtual networks, storage accounts, and application services.',
      'Implemented RBAC and NSGs to enforce access control across multiple cloud resources.',
      'Monitored system health and optimized cloud costs using Azure Monitor and Log Analytics.',
    ],
  },
  hrhnext: {
    company: 'HRH Next Service Limited',
    role: 'System Monitoring Intern',
    period: '2023 - 2024',
    location: 'Remote',
    description: [
      'Monitored system and application logs using Splunk to detect incidents and anomalies in production environments.',
      'Supported incident triage, root cause analysis, and internal system audits.',
      'Contributed to improved incident response efficiency through log analysis and alert validation.',
    ],
  },
  googleambassador: {
    company: 'SRKR Engineering College',
    role: 'Google Student Ambassador',
    period: 'Aug 2024 - Present',
    location: 'Vijayawada, AP',
    description: [
      'Represented Google developer programs on campus and promoted cloud, AI, and developer technologies.',
      'Conducted peer learning sessions and supported student technical communities and events.',
    ],
  },
};

type ExperienceKey = keyof typeof experiences;

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceKey>('genzgalaxy');

  const currentExperience = experiences[activeTab];

  return (
    <section id="experience" className="w-full mt-28">
      <h2 className="flex items-center text-3xl font-bold mb-16">
        <span className="mr-4">Where I&apos;ve </span>
        <span className="text-teal-400 mr-3">Worked</span>
        <div className="h-px bg-gray-600 grow" />
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Company tabs */}
        <div className="md:w-64 flex md:flex-col overflow-x-auto md:overflow-visible">
          {(Object.keys(experiences) as ExperienceKey[]).map((key) => (
            <button
              type="button"
              key={key}
              onClick={() => setActiveTab(key)}
              className={`py-3 px-4 text-left border-l-2 whitespace-nowrap transition-all duration-300 ${activeTab === key
                  ? 'bg-slate-800/50 text-teal-400 border-l-teal-400'
                  : 'hover:bg-slate-800/30 border-l-gray-700 text-gray-400 hover:text-white'
                }`}
            >
              {experiences[key].company}
            </button>
          ))}
        </div>

        {/* Experience details */}
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-2xl font-semibold">
              {currentExperience.role}{' '}
              <span className="text-teal-400">
                @ {currentExperience.company}
              </span>
            </h3>
            <p className="text-gray-400 mt-1">
              {currentExperience.period} • {currentExperience.location}
            </p>
          </div>

          <ul className="space-y-4 mt-6">
            {currentExperience.description.map((item, index) => (
              <li key={`${index}-${item.substring(0, 10)}`} className="flex">
                <Hexagon className="text-teal-400 mr-2 mt-1 size-3 fill-current shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
