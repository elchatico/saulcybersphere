
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Choose Your Service",
      description: "Browse our price list and pick the service you need. Each service has clear pricing and requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
      )
    },
    {
      title: "Chat via WhatsApp",
      description: "Click 'Request Now' to start a chat. An agent will tell you exactly which documents are needed for your specific case.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      )
    },
    {
      title: "Send Documents",
      description: "Simply take clear photos of your documents and send them to us on WhatsApp. No need to visit the shop.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
      )
    },
    {
      title: "Doorstep Visit (Optional)",
      description: "If you need scanning, printing, or physical document pick-up, we send a rider to your house in Mathare North.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: "Processing & Delivery",
      description: "We handle the online application and send back your receipts or completed certificates. If printed, we deliver them back to your door.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ];

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">How It Works</h1>
        <p className="text-slate-600 text-lg">Getting your government papers has never been easier. Follow these 5 simple steps.</p>
      </div>

      <div className="space-y-12 relative">
        {/* Connecting Line */}
        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-blue-100 -z-10 hidden sm:block"></div>

        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-blue-500 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-slate-900 rounded-3xl text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
        <p className="text-slate-400 mb-8">Save yourself the transport cost and the long queues in town.</p>
        <Link 
          to="/services" 
          className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
        >
          See Our Services
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
