export type CoinType = {
  id: string;
  images: {
    front: string;
    back: string;
  };
  country: string;
  year: string;
  value: number;
  other: string;
  name: string;
};

export type FiltersType = {
  country?: string[];
  year?: string[];
};
