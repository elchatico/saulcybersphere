
import React from 'react';

const Safety: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Your Privacy & Security</h1>
        <p className="text-slate-600">We treat your documents with the highest level of respect and confidentiality.</p>
      </div>

      <div className="space-y-10">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Data Privacy Guarantee
          </h2>
          <p className="text-slate-600 mb-4">
            At Mathare Cyber Direct, we only collect information necessary to complete your request. Once your service is fulfilled:
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-2 text-sm">
            <li>Digital document photos sent via WhatsApp are deleted from our local storage.</li>
            <li>We never store your passwords or secret security questions.</li>
            <li>We do not share your contact information with third-party marketers.</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            Government Fee Transparency
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            We are a private service provider. When applying for government services (like DL or ID), there are two types of costs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block font-bold text-slate-900 text-sm mb-1">Government Fees</span>
              <p className="text-xs text-slate-500 italic">This goes directly to the state via eCitizen M-Pesa Till or Paybill. We help you make this payment correctly.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <span className="block font-bold text-blue-900 text-sm mb-1">Our Service Fee</span>
              <p className="text-xs text-blue-800 italic">This is what you pay us for our expertise, the internet used, printing/scanning, and doorstep delivery.</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 shadow-sm">
          <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            Important Deadlines
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            While we process most orders within 2-4 hours, some government services (like Passports or Good Conduct) are subject to government processing times and appointment availability. We will always keep you updated via WhatsApp on the status of your application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
