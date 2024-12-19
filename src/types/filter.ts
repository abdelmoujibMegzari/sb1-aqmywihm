export interface FilterSetting {
  id: string;
  name: string;
  platforms: string[];
  pages: string[];
  dateRange?: {
    start: string;
    end: string;
  };
}