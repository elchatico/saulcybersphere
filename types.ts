
export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: ServiceCategory;
}

export enum ServiceCategory {
  KRA = "KRA & Tax Services",
  ECITIZEN = "e-Citizen & Civil (Good Conduct)",
  NTSA = "Transport & NTSA (TIMS)",
  HEALTH = "SHA (NHIF) & NSSF",
  EDUCATION = "Education & TSC Portal",
  ACADEMIC = "Academic & Research",
  PRINTING = "Printing & Finishing",
  DESIGN = "CVs & Design",
  TRAVEL = "Travel & SGR Booking",
  UTILITY = "Utility & Finance"
}

export interface NavItem {
  label: string;
  path: string;
}
