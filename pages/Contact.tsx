
import React from 'react';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="legal-font text-5xl font-black text-charcoal mb-4 uppercase tracking-tighter">Speak to the Agent</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">We're located in Mathare North, Sector 1. Always ready for a consultation.</p>
        <div className="w-24 h-2 bg-crimson mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="bg-white p-10 border-2 border-slate-200 text-center hover:border-mustard hover:shadow-xl transition-all group relative overflow-hidden"
        >
          <div className="w-16 h-16 bg-slate-100 text-charcoal rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-mustard transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 12.8c-.23.59-1.32 1.13-1.82 1.21-.46.07-.9.13-2.82-.62-2.46-.96-4.04-3.48-4.16-3.64-.12-.16-.98-1.3-1-2.48s.59-1.74.8-1.98c.2-.24.44-.3.59-.3h.42c.14 0 .32.01.49.4.21.49.72 1.76.78 1.88.06.12.1.26.02.42s-.12.27-.24.42l-.36.42c-.12.15-.25.31-.11.55.14.24.62 1.03 1.33 1.66.91.81 1.67 1.06 1.91 1.18s.45.09.62-.1c.17-.19.72-.84.92-1.13.2-.29.39-.24.66-.14s1.7.8 2 1.3.2.49.3.56.42.08.12.08.69-.15 1.28z"/></svg>
          </div>
          <span className="block legal-font text-2xl font-black text-charcoal mb-2 uppercase">WhatsApp</span>
          <span className="text-sm font-bold text-mustard uppercase tracking-widest">{PHONE_NUMBER}</span>
        </a>

        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="bg-white p-10 border-2 border-slate-200 text-center hover:border-crimson hover:shadow-xl transition-all group relative overflow-hidden"
        >
          <div className="w-16 h-16 bg-slate-100 text-charcoal rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-crimson group-hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1.01 1.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
          <span className="block legal-font text-2xl font-black text-charcoal mb-2 uppercase">Direct Call</span>
          <span className="text-sm font-bold text-crimson uppercase tracking-widest">{PHONE_NUMBER}</span>
        </a>

        <div className="bg-white p-10 border-2 border-slate-200 text-center hover:border-charcoal hover:shadow-xl transition-all group relative overflow-hidden">
          <div className="w-16 h-16 bg-slate-100 text-charcoal rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal group-hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <span className="block legal-font text-2xl font-black text-charcoal mb-2 uppercase">Location</span>
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mathare North, Sector 1</span>
        </div>
      </div>

      <div className="bg-charcoal rounded-sm p-12 shadow-2xl relative border-t-8 border-mustard">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="legal-font text-4xl font-black text-white mb-6 uppercase tracking-tighter">Find Our Office</h2>
            <p className="text-white/70 mb-8 font-medium italic">
              "We are located in Sector 1, near the main stage. You can't miss the signs. If you can't come to us, remember — we bring the cyber to your door."
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-mustard text-charcoal rounded-full flex items-center justify-center font-black">M</div>
                <div>
                  <span className="block font-black text-white text-sm uppercase">Mon - Sat</span>
                  <p className="text-xs text-mustard font-bold uppercase">5:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-crimson text-white rounded-full flex items-center justify-center font-black">S</div>
                <div>
                  <span className="block font-black text-white text-sm uppercase">Sundays</span>
                  <p className="text-xs text-white/40 font-bold uppercase">Emergency Filing Only</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 h-64 rounded-sm flex flex-col items-center justify-center border-2 border-white/10 group overflow-hidden">
             <div className="text-mustard text-5xl mb-4 group-hover:scale-110 transition-transform">📍</div>
             <p className="text-white font-black uppercase tracking-widest text-xs">Sector 1, Mathare North</p>
             <p className="text-white/30 text-[10px] uppercase mt-2">Professional Digital Zone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
