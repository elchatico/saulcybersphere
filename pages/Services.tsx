
import React, { useState } from 'react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';
import { ServiceCategory } from '../types';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');

  const categories = ['All', ...Object.values(ServiceCategory)];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="legal-font text-5xl font-black text-charcoal mb-4 uppercase tracking-tighter">Professional Rates</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">2025 Realistic Pricing — Transparent & Final.</p>
        <div className="w-24 h-2 bg-mustard mx-auto mt-6"></div>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-6 mb-12 gap-3 no-scrollbar justify-start md:justify-center px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`whitespace-nowrap px-6 py-3 rounded-sm text-xs font-black uppercase tracking-tighter transition-all border-2 ${
              activeCategory === cat 
                ? 'bg-charcoal text-mustard border-charcoal shadow-[4px_4px_0px_var(--crimson)]' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-charcoal hover:text-charcoal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-sm border-2 border-slate-200 p-8 flex flex-col hover:border-mustard hover:shadow-[12px_12px_0px_rgba(26,26,26,0.05)] transition-all group relative overflow-hidden">
            {/* Saul Aesthetic Corner Decor */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rotate-45 translate-x-10 -translate-y-10 group-hover:bg-mustard transition-colors z-0"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black text-white bg-charcoal px-3 py-1 rounded-sm uppercase tracking-widest">
                  {service.category.split('&')[0].trim()}
                </span>
                <span className="text-2xl font-black text-crimson italic tracking-tighter tabular-nums">{service.price}</span>
              </div>
              
              <h3 className="legal-font text-2xl font-black text-charcoal mb-4 uppercase leading-tight min-h-[3rem] flex items-center">{service.name}</h3>
              
              <div className="mb-8 p-4 bg-slate-50 border-l-4 border-mustard italic text-slate-600 text-sm leading-relaxed font-medium">
                "{service.description}"
              </div>
            </div>
            
            <div className="mt-auto relative z-10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Saul! I want to book the ${service.name} service. I saw the price is ${service.price} on your website. Please let me know what documents are required.`)}`}
                className="w-full py-4 bg-charcoal text-mustard text-center rounded-sm font-black text-sm uppercase tracking-widest hover:bg-crimson hover:text-white transition-all shadow-[6px_6px_0px_var(--mustard)] active:shadow-none active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.3.045-.6.08-1.742-.367-1.585-.632-2.602-2.235-2.681-2.341-.079-.106-.633-.844-.633-1.611 0-.766.399-1.144.542-1.295.143-.151.312-.189.416-.189h.295c.087 0 .175.01.257.21.106.257.356.877.387.945.031.069.052.149.006.25-.046.101-.069.163-.138.252-.069.088-.144.148-.207.239-.068.092-.14.19-.06.326.08.136.356.589.763.952.525.467.97.612 1.108.684.138.071.218.059.3-.035.082-.093.352-.409.445-.548.093-.139.186-.116.312-.069.127.046.806.38 1.144.542.143.151.239.226.273.284.034.058.034.337-.11.742z"/></svg>
                Book via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note Section */}
      <div className="mt-20 p-10 bg-charcoal border-l-8 border-mustard rounded-sm text-white shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-mustard rounded-full text-charcoal">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="legal-font text-3xl font-black uppercase text-mustard tracking-tighter">Fine Print & Conditions</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
          <div className="space-y-4 font-medium text-sm">
            <div className="flex gap-3 p-3 bg-white/5 rounded-sm">
              <span className="text-mustard font-black">01.</span> 
              <p>Prices shown are our professional service fees. Government disbursement fees (KRA/NTSA/e-Citizen) are paid separately to their official paybills.</p>
            </div>
            <div className="flex gap-3 p-3 bg-white/5 rounded-sm">
              <span className="text-mustard font-black">02.</span> 
              <p>Doorstep collection or delivery within Mathare North Sector 1-4 attracts a flat KSh 50 convenience fee.</p>
            </div>
          </div>
          <div className="space-y-4 font-medium text-sm">
            <div className="flex gap-3 p-3 bg-white/5 rounded-sm">
              <span className="text-mustard font-black">03.</span> 
              <p>Urgent or after-hours filing (8 PM - 10 PM) may incur an additional 'Rush' charge. Better call Saul to confirm!</p>
            </div>
            <div className="flex gap-3 p-3 bg-white/5 rounded-sm">
              <span className="text-mustard font-black">04.</span> 
              <p>Confidentiality is guaranteed. We do not store your passwords or sensitive security data once the filing is complete.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
