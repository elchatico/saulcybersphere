
import { ServiceCategory, ServiceItem } from './types';

export const WHATSAPP_NUMBER = "254702093678";
export const EMAIL_ADDRESS = "saulgoodmancafe@gmail.com";
export const PHONE_NUMBER = "0702093678";

export const SERVICES: ServiceItem[] = [
  // KRA
  { id: 'kra-nil', name: 'Nil Returns', price: 'KSh 100', description: 'Zero income? No problem. We handle the paperwork for you.', category: ServiceCategory.KRA },
  { id: 'kra-income', name: 'Income Tax Returns', price: 'KSh 150', description: 'P9 processing and standard employment returns.', category: ServiceCategory.KRA },
  { id: 'kra-pin', name: 'KRA Pin', price: 'KSh 150', description: 'Fresh registration or PIN recovery specialists.', category: ServiceCategory.KRA },
  
  // ECITIZEN
  { id: 'good-conduct', name: 'G. Conduct (Good Conduct)', price: 'KSh 150', description: 'Police clearance booking and processing assistance.', category: ServiceCategory.ECITIZEN },
  { id: 'birth-cert', name: 'Birth Certificate', price: 'KSh 200', description: 'New applications or replacements for your legal identity.', category: ServiceCategory.ECITIZEN },
  { id: 'passport-app', name: 'Passport Application', price: 'KSh 400', description: 'Expert guidance through the high-stakes passport portal.', category: ServiceCategory.ECITIZEN },
  
  // NTSA
  { id: 'dl-renewal', name: 'DL Renewal (Driving License)', price: 'KSh 200', description: 'Stay on the right side of the law. Renew today.', category: ServiceCategory.NTSA },
  { id: 'dl-smart', name: 'DL Smart', price: 'KSh 150', description: 'Upgrade to the new generation smart driving license.', category: ServiceCategory.NTSA },
  
  // EDUCATION
  { id: 'helb', name: 'HELB', price: 'KSh 200', description: 'Student loan applications and compliance certificates.', category: ServiceCategory.EDUCATION },
  { id: 'kuccps', name: 'KUCCPS', price: 'KSh 200', description: 'University and college placement for high achievers.', category: ServiceCategory.EDUCATION },
  { id: 'tsc', name: 'TSC', price: 'KSh 350', description: 'Professional portal services for our local teachers.', category: ServiceCategory.EDUCATION },

  // PRINTING & FINISHING
  { id: 'print-bw', name: 'Print B.W (Black & White)', price: 'KSh 10', description: 'Crisp, professional monochrome documents.', category: ServiceCategory.PRINTING },
  { id: 'print-color', name: 'Print Color', price: 'KSh 20', description: 'Vibrant color prints for maximum impact.', category: ServiceCategory.PRINTING },
  { id: 'copy-bw', name: 'Photocopy B.W', price: 'KSh 5', description: 'Fast and reliable black and white duplication.', category: ServiceCategory.PRINTING },
  { id: 'copy-color', name: 'Photocopy Color', price: 'KSh 10', description: 'High-quality color copies of your documents.', category: ServiceCategory.PRINTING },
  { id: 'copy-id', name: 'PhotoCopy ID', price: 'KSh 10', description: 'Perfect ID copies for your legal applications.', category: ServiceCategory.PRINTING },
  { id: 'lamination', name: 'Lamination', price: 'KSh 50', description: 'Seal it in plastic. Protect your assets.', category: ServiceCategory.PRINTING },
  { id: 'scanning', name: 'Scanning', price: 'KSh 20', description: 'Digitize your files. High-resolution PDF results.', category: ServiceCategory.PRINTING },
  { id: 'bind-tape', name: 'Binding (Tape)', price: 'KSh 50', description: 'Neat, standard document finishing.', category: ServiceCategory.PRINTING },
  // Fixed: Removed invalid 'index' property that was not defined in ServiceItem interface
  { id: 'bind-spiral', name: 'Binding (Spiral)', price: 'KSh 100', description: 'Professional spiral binding for reports.', category: ServiceCategory.PRINTING },

  // PHOTOGRAPHY
  { id: 'photo-4r', name: '4 R photos', price: 'KSh 100', description: 'High-gloss 4R prints for your memories.', category: ServiceCategory.PHOTO },
  { id: 'photo-46', name: 'Photo 4*6', price: 'KSh 25', description: 'Standard size portrait photography.', category: ServiceCategory.PHOTO },
  { id: 'photo-a4', name: 'Photo A4', price: 'KSh 100', description: 'Large format A4 photo printing.', category: ServiceCategory.PHOTO },

  // TECHNICAL
  { id: 'os-install', name: 'OS Installation', price: 'KSh 400', description: 'Fresh Windows/Linux setup. Fast and reliable.', category: ServiceCategory.TECHNICAL },
  { id: 'ms-office', name: 'Ms Office', price: 'KSh 200', description: 'Word, Excel, PowerPoint. All the tools you need.', category: ServiceCategory.TECHNICAL },

  // ACADEMIC
  { id: 'typing', name: 'Typing', price: 'KSh 30', description: 'Professional document typing per page.', category: ServiceCategory.ACADEMIC },
];
