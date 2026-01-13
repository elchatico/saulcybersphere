
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Safety', path: '/safety' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-charcoal border-b border-mustard sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex flex-col items-start">
              <span className="legal-font text-2xl font-bold text-mustard leading-none">SAUL CYBERSPHERE</span>
              <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Professional Digital Solutions</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-mustard border-b-2 border-mustard'
                      : 'text-white/80 hover:text-mustard'
                  } px-1 py-2 text-sm font-bold transition-colors uppercase`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-mustard hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-charcoal border-b border-mustard">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    location.pathname === item.path
                      ? 'bg-white/10 text-mustard'
                      : 'text-white/80 hover:bg-white/5'
                  } block px-3 py-2 rounded-md text-base font-bold uppercase`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="block px-3 py-3 rounded-md text-base font-bold bg-mustard text-charcoal mt-4 text-center"
              >
                Chat with Saul
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white/60 py-12 px-4 border-t-4 border-mustard">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="legal-font text-2xl font-bold text-mustard mb-2">SAUL CYBERSPHERE</h3>
            <p className="text-sm italic mb-4">"Better call Saul for all your digital needs."</p>
            <p className="text-xs uppercase tracking-widest text-white/40">Mathare North, Sector 1</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Digital Portals</h3>
            <ul className="text-sm space-y-2 font-medium">
              <li>KRA & TAX Compliance</li>
              <li>e-Citizen & DCI Registry</li>
              <li>NTSA TIMS Applications</li>
              <li>HELB & KUCCPS Portals</li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Get Legal Help</h3>
            <p className="text-sm mb-4">Available for emergency filing and last-minute applications.</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href={`tel:${PHONE_NUMBER}`} className="p-2 bg-crimson rounded-lg text-white hover:opacity-80">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="p-2 bg-green-600 rounded-lg text-white hover:opacity-80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 12.8c-.23.59-1.32 1.13-1.82 1.21-.46.07-.9.13-2.82-.62-2.46-.96-4.04-3.48-4.16-3.64-.12-.16-.98-1.3-1-2.48s.59-1.74.8-1.98c.2-.24.44-.3.59-.3h.42c.14 0 .32.01.49.4.21.49.72 1.76.78 1.88.06.12.1.26.02.42s-.12.27-.24.42l-.36.42c-.12.15-.25.31-.11.55.14.24.62 1.03 1.33 1.66.91.81 1.67 1.06 1.91 1.18s.45.09.62-.1c.17-.19.72-.84.92-1.13.2-.29.39-.24.66-.14s1.7.8 2 1.3.2.49.3.56.42.08.12.08.69-.15 1.28z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-[10px] uppercase tracking-widest text-white/30">
          <p>&copy; {new Date().getFullYear()} Saul Cybersphere. Not an official government portal. We are an independent agency specializing in digital filing and professional assistance.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
