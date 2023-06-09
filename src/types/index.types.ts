export type CoinType = {
  id: string;
  images: {
    front: string;
    back: string;
  };
  country: string;
  year: number;
  value: number;
  other: string;
  name: string;
  parent: number;
};

export type YearRange = {
  start: number;
  end: number;
};

export type FiltersType = {
  country: string[];
  yearRanges: YearRange[];
};
