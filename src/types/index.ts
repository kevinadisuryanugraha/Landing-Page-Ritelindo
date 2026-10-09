export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  highlight?: boolean;
}

export interface RetailPackage {
  id: string;
  name: string;
  category: string;
  idealFor: string;
  storeSize: string;
  priceEstimate: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface BusinessSector {
  id: string;
  name: string;
  description: string;
  icon: string;
  popularRack: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  ownerName: string;
  storeName: string;
  location: string;
  businessType: string;
  quote: string;
  rating: number;
  setupSummary: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  shortLabel: string;
  description: string;
  highlight: string;
  duration: string;
  cost: string;
  deliverables: string[];
  icon: string;
  actionCta: {
    label: string;
    source: 'hero' | 'layout3d' | 'package' | 'faq';
    customMessage: string;
  };
}

