import React, { useState, useMemo } from 'react';
import Finance from './industries/Finance';
import HealthCare from './industries/HealthCare';
import Media from './industries/Media';
import Technnology from './industries/Technnology';
import Telecommunication from './industries/Telecommunication';
import Energy from './industries/Energy';
import Consumer from './industries/Consumer';
import Transport from './industries/Transport';

const industryTabs = [
  { id: 'finance', label: 'Financial Services', component: Finance },
  { id: 'healthcare', label: 'Healthcare', component: HealthCare },
  { id: 'media', label: 'Media, Entertainment & Gaming', component: Media },
  { id: 'technology', label: 'Technology Enablement', component: Technnology },
  { id: 'telecommunication', label: 'Telecommunications', component: Telecommunication },
  { id: 'energy', label: 'Energy', component: Energy },
  { id: 'consumer', label: 'Consumer & Industrial Products', component: Consumer },
  { id: 'transport', label: 'Transportation & Travel', component: Transport },
];

const IndustriesOverview = () => {
  const [activeTab, setActiveTab] = useState(industryTabs[0].id);

  const ActiveComponent = useMemo(
    () => industryTabs.find((tab) => tab.id === activeTab)?.component || Finance,
    [activeTab],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        <div className="text-center mb-10">
          <p className="text-indigo-600 font-semibold uppercase tracking-wide text-xs mb-2">Industries</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Industry Solutions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore how TetraX AI delivers domain-specific consulting, engineering, and managed services across key
            industries. Select a tab to dive deeper into tailored solutions, challenges, and success stories.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {industryTabs.map((tab) => (
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

        {/* Active Industry */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default IndustriesOverview;

