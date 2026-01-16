
export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: ServiceCategory;
}

export enum ServiceCategory {
  KRA = "KRA & Tax Services",
  ECITIZEN = "e-Citizen & Civil",
  NTSA = "Transport & NTSA",
  EDUCATION = "Education & TSC Portal",
  PRINTING = "Printing & Finishing",
  PHOTO = "Photography",
  TECHNICAL = "Tech & Software",
  ACADEMIC = "Academic & Typing"
}

export interface NavItem {
  label: string;
  path: string;
}
