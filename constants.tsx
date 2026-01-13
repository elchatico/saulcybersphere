
import { ServiceCategory, ServiceItem } from './types';

export const WHATSAPP_NUMBER = "254702093678";
export const EMAIL_ADDRESS = "saulcybersphere@gmail.com";
export const PHONE_NUMBER = "0702093678";

export const SERVICES: ServiceItem[] = [
  // KRA
  { id: 'kra-nil', name: 'KRA Nil Returns', price: 'KSh 100', description: 'Quick filing for individuals with no income.', category: ServiceCategory.KRA },
  { id: 'kra-p9', name: 'KRA P9 Returns', price: 'KSh 200', description: 'Employment returns based on your P9 form.', category: ServiceCategory.KRA },
  { id: 'kra-pin', name: 'KRA PIN Registration', price: 'KSh 200', description: 'New Tax PIN and Certificate generation.', category: ServiceCategory.KRA },
  { id: 'kra-tcc', name: 'Tax Compliance (TCC)', price: 'KSh 300', description: 'Application for TCC certificate.', category: ServiceCategory.KRA },
  
  // ECITIZEN
  { id: 'good-conduct', name: 'Good Conduct Application', price: 'KSh 200', description: 'Service fee for DCI Police Clearance booking.', category: ServiceCategory.ECITIZEN },
  { id: 'passport-app', name: 'Passport Application', price: 'KSh 500', description: 'Expert guidance through the portal application.', category: ServiceCategory.ECITIZEN },
  { id: 'birth-cert', name: 'Birth Certificate Assistance', price: 'KSh 300', description: 'Filing for new or replacement certificates.', category: ServiceCategory.ECITIZEN },
  
  // NTSA
  { id: 'dl-renewal', name: 'DL Renewal Assistance', price: 'KSh 200', description: 'Renew your driving license on TIMS.', category: ServiceCategory.NTSA },
  { id: 'smart-plates', name: 'Reflective/Smart Plates', price: 'KSh 300', description: 'Application for new generation plates.', category: ServiceCategory.NTSA },
  { id: 'logbook-transfer', name: 'Logbook Transfer', price: 'KSh 500', description: 'Vehicle ownership transfer processing.', category: ServiceCategory.NTSA },
  
  // HEALTH
  { id: 'sha-reg', name: 'SHA (NHIF) Registration', price: 'KSh 150', description: 'Registration for the new Social Health Authority.', category: ServiceCategory.HEALTH },
  { id: 'nssf-check', name: 'NSSF Status Check', price: 'KSh 100', description: 'Verify your contributions and statements.', category: ServiceCategory.HEALTH },
  
  // EDUCATION
  { id: 'kuccps', name: 'KUCCPS Placement', price: 'KSh 300', description: 'University and college course selection.', category: ServiceCategory.EDUCATION },
  { id: 'helb-loan', name: 'HELB Loan Application', price: 'KSh 300', description: 'Undergraduate and TVET loan applications.', category: ServiceCategory.EDUCATION },
  { id: 'tsc-portal', name: 'TSC Portal Services', price: 'KSh 200', description: 'Wealth declaration, payslips, and registration.', category: ServiceCategory.EDUCATION },

  // ACADEMIC
  { id: 'research-asst', name: 'Research Assistance', price: 'Varies', description: 'Project research, typing, and formatting.', category: ServiceCategory.ACADEMIC },
  { id: 'past-papers', name: 'KCPE/KCSE Past Papers', price: 'KSh 50', description: 'Digital copies of previous exams.', category: ServiceCategory.ACADEMIC },

  // PRINTING
  { id: 'bw-print', name: 'B&W Printing', price: 'KSh 10/pg', description: 'High-speed monochrome printing.', category: ServiceCategory.PRINTING },
  { id: 'color-print', name: 'Color Printing', price: 'KSh 30/pg', description: 'Vibrant color prints for documents.', category: ServiceCategory.PRINTING },
  { id: 'lamination', name: 'Lamination (A4)', price: 'KSh 50', description: 'Protect your certificates and IDs.', category: ServiceCategory.PRINTING },
  { id: 'scanning', name: 'Scanning to PDF', price: 'KSh 20', description: 'Clear document scanning and email/WA.', category: ServiceCategory.PRINTING },

  // DESIGN
  { id: 'cv-design', name: 'Professional CV Design', price: 'KSh 200', description: 'Modern resumes for job seekers.', category: ServiceCategory.DESIGN },
  { id: 'business-cards', name: 'Business Card Design', price: 'KSh 300', description: 'Creative and professional designs.', category: ServiceCategory.DESIGN },

  // TRAVEL
  { id: 'sgr-booking', name: 'SGR Booking', price: 'KSh 100', description: 'Service fee for Madaraka Express booking.', category: ServiceCategory.TRAVEL },
  { id: 'visa-asst', name: 'International Visa Asst', price: 'Varies', description: 'Consultation and form filling assistance.', category: ServiceCategory.TRAVEL },

  // UTILITY
  { id: 'kplc-utility', name: 'Bills & Utilities', price: 'KSh 50', description: 'KPLC Tokens, Water, and TV Subscriptions.', category: ServiceCategory.UTILITY },
  { id: 'mpesa-services', name: 'Agency Services', price: 'Rates', description: 'M-Pesa deposits and withdrawals.', category: ServiceCategory.UTILITY },
];
