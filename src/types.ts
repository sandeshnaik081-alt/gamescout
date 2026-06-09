export interface GameDeal {
  id: string;
  title: string;
  store: string;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  dealUrl: string;
  imageUrl: string;
  genre: string;
  rating?: string;
  ratingPercent?: number;
  bestEver?: boolean;
  sourceType: 'scraped' | 'api';
}

export interface DealAnalystReport {
  dealWeather: {
    status: string; // e.g., "Sizzling Hot", "Warm & Bargain-heavy", "Cozy Calm"
    description: string;
  };
  goldenDeals: {
    id: string;
    gameTitle: string;
    description: string;
    whyBuy: string;
  }[];
  genreHighlight: {
    genre: string;
    gameTitle: string;
    saving: string;
    comment: string;
  }[];
  editorialSummary: string;
}

export interface ScrapingStats {
  scrapedCount: number;
  apiCount: number;
  timestamp: string;
}
