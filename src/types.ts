export type ServiceType = 'fast-track' | 'trc' | 'work-permit' | 'all';

export interface DocumentGroup {
  categoryTitle: string;
  badge?: string;
  docs: string[];
  photoInfo?: string[];
  specialRequirements?: string[];
  processingTimeNote?: string;
}

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  heroImage: string;
  summary: string;
  keyBenefits: string[];
  eligibility: string[];
  requiredDocs: string[];
  docGroups?: DocumentGroup[];
  processingTime: string;
  validity: string;
  specialNotice?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  nationality: string;
  service: ServiceType | '';
  notes: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  hotline: string;
  isHeadquarter: boolean;
}
