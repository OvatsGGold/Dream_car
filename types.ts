export interface CarRecommendation {
  make: string;
  model: string;
  year: string;
  category: string;
  reason: string;
  keyFeatures: string[];
  estimatedPriceRange: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}