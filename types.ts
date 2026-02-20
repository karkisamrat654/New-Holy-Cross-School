
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: 'Event' | 'Notice' | 'Achievement';
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}
