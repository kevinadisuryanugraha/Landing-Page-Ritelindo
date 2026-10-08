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
  description: string;
  highlight: string;
}
