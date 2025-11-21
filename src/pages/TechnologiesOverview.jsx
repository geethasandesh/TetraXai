import React, { useState, useMemo } from 'react';
import Ai from './Technologies/Ai';
import CloudComputing from './Technologies/CloudComputing';
import Devops from './Technologies/Devops';
import BigData from './Technologies/BigData';
import WebDevelopment from './Technologies/WebDevelopment';
import Iot from './Technologies/Iot';

const technologyTabs = [
  { id: 'ai', label: 'AI', component: Ai },
  { id: 'cloud', label: 'Cloud Computing', component: CloudComputing },
  { id: 'devops', label: 'DevOps', component: Devops },
  { id: 'bigdata', label: 'Big Data', component: BigData },
  { id: 'web', label: 'Web Development', component: WebDevelopment },
  { id: 'iot', label: 'IoT', component: Iot },
];

const TechnologiesOverview = () => {
  const [activeTab, setActiveTab] = useState(technologyTabs[0].id);

  const ActiveComponent = useMemo(
    () => technologyTabs.find((tab) => tab.id === activeTab)?.component || Ai,
    [activeTab],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        <div className="text-center mb-10">
          <p className="text-indigo-600 font-semibold uppercase tracking-wide text-xs mb-2">Technologies</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Technology Capabilities</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the advanced technology practices TetraX AI leverages to build scalable platforms, modernize
            applications, and accelerate product delivery. Choose a focus area to explore our approach in detail.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {technologyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Technology */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default TechnologiesOverview;

