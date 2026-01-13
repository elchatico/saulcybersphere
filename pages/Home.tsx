
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-20 px-4 md:py-32 border-b-8 border-mustard shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="legal-font text-mustard text-2xl md:text-3xl mb-4 italic tracking-wider">
            Better call Saul for all your digital needs.
          </h2>
          <h1 className="legal-font text-5xl md:text-8xl font-black mb-6 uppercase tracking-tight leading-none">
            SAUL <span className="text-mustard">CYBERSPHERE</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-medium tracking-wide">
            Professional Digital Solutions for Mathare North. <br className="hidden md:block"/>
            We handle the portals so you don't have to.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/services" 
              className="px-10 py-5 bg-mustard text-charcoal font-black rounded-sm shadow-[8px_8px_0px_rgba(139,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-xl uppercase tracking-tighter"
            >
              See the Price List
            </Link>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="px-10 py-5 bg-crimson text-white font-black rounded-sm shadow-[8px_8px_0px_rgba(255,184,28,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-xl uppercase tracking-tighter flex items-center justify-center gap-3"
            >
              Contact Saul
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 12.8c-.23.59-1.32 1.13-1.82 1.21-.46.07-.9.13-2.82-.62-2.46-.96-4.04-3.48-4.16-3.64-.12-.16-.98-1.3-1-2.48s.59-1.74.8-1.98c.2-.24.44-.3.59-.3h.42c.14 0 .32.01.49.4.21.49.72 1.76.78 1.88.06.12.1.26.02.42s-.12.27-.24.42l-.36.42c-.12.15-.25.31-.11.55.14.24.62 1.03 1.33 1.66.91.81 1.67 1.06 1.91 1.18s.45.09.62-.1c.17-.19.72-.84.92-1.13.2-.29.39-.24.66-.14s1.7.8 2 1.3.2.49.3.56.42.08.12.08.69-.15 1.28z"/></svg>
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-bold uppercase tracking-widest text-mustard/60">
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-crimson rounded-full"></div> KRA ITax Experts</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-crimson rounded-full"></div> e-Citizen Support</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-crimson rounded-full"></div> NTSA Specialists</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-crimson rounded-full"></div> Academic Projects</span>
          </div>
        </div>
      </section>

      {/* Services At a Glance */}
      <section className="py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="legal-font text-4xl font-black text-charcoal mb-4 uppercase tracking-tighter">We Handle The Portals For You</h2>
            <div className="w-32 h-2 bg-crimson mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'KRA', desc: 'PIN, Returns, TCC', icon: '⚖️' },
              { label: 'e-Citizen', desc: 'Good Conduct, Birth Certs', icon: '🏛️' },
              { label: 'NTSA', desc: 'DL & Smart Plates', icon: '🚗' },
              { label: 'Education', desc: 'HELB, KUCCPS, TSC', icon: '🎓' },
              { label: 'Finance', desc: 'M-Pesa, Utility Bills', icon: '💳' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border-t-4 border-charcoal text-center hover:bg-mustard/10 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black text-charcoal uppercase tracking-tighter text-sm mb-1">{item.label}</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="legal-font text-5xl font-black text-charcoal mb-4 uppercase tracking-tighter">Why Choose Saul Cybersphere?</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">"I'm the guy you call when the portal says Access Denied."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 border-l-8 border-mustard shadow-xl">
              <h3 className="legal-font text-2xl font-black text-charcoal mb-4 uppercase">Unrivaled Expertise</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We've seen every error code. We know the shortcuts. While others struggle with login loops, we get your documents processed and delivered. Professionalism is our middle name.
              </p>
            </div>
            
            <div className="bg-white p-10 border-l-8 border-crimson shadow-xl">
              <h3 className="legal-font text-2xl font-black text-charcoal mb-4 uppercase">Absolute Convenience</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Why spend your day in a queue under the sun? Send your details via WhatsApp, and we'll handle the rest. We deliver printed certificates right to Sector 1-4 in Mathare North.
              </p>
            </div>
            
            <div className="bg-white p-10 border-l-8 border-charcoal shadow-xl">
              <h3 className="legal-font text-2xl font-black text-charcoal mb-4 uppercase">Local Trust</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We are your neighbors. We understand the value of a hard-earned shilling. Our pricing is transparent, and our commitment to Mathare North is absolute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-20 px-4 border-t-8 border-mustard relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="legal-font text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Don't Wait For Deadlines.</h2>
          <p className="text-mustard text-xl mb-12 font-bold uppercase tracking-widest italic">Better Call Saul today!</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="px-12 py-5 bg-white text-charcoal font-black rounded-sm text-2xl hover:bg-mustard transition-colors uppercase"
            >
              Call: {PHONE_NUMBER}
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="px-12 py-5 bg-mustard text-charcoal font-black rounded-sm text-2xl hover:bg-white transition-colors uppercase"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
