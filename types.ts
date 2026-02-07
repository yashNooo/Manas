
export type AppScreen = 'home' | 'itinerary' | 'expenses' | 'profile' | 'planner' | 'syncing';

export interface Expense {
  id: string;
  name: string;
  category: 'Dining' | 'Transport' | 'Lodging' | 'Other';
  amount: number;
  time: string;
  date: string;
}

export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  type: 'flight' | 'hotel' | 'activity' | 'dining' | 'shopping' | 'alert';
  status?: string;
  imageUrl?: string;
  overlap?: boolean;
}
