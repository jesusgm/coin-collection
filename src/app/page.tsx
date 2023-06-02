"use client";

import { useState } from "react";

import CoinList from "@/components/CoinList";
import YearRangeFilter from "@/components/filters/YearRangeFilter";
import { FiltersType, YearRange } from "@/types/index.types";

import coinsJson from "@/data/coins.json";
import yearsJson from "@/data/years.json";
import { buildYearRanges } from "@/helpers/years";

export default function Home() {
  const [filters, setFilters] = useState<FiltersType>({
    yearRanges: [],
    country: [],
  });

  const filteredCoins = coinsJson.filter((coin) => {
    if (filters?.yearRanges?.length > 0) {
      return filters.yearRanges.some((yr) => {
        return yr.start <= coin.year && yr.end >= coin.year;
      });
    }

    return true;
  });

  const handleChangeYear = (value: YearRange) => {
    const isActive = filters.yearRanges?.some(
      (y) => y.start === value.start && y.end === value.end
    );

    setFilters({
      ...filters,
      yearRanges: isActive
        ? filters.yearRanges?.filter((yr) => yr.start !== value.start)
        : [...(filters?.yearRanges ?? []), value],
    });
  };

  const yearRanges = buildYearRanges(yearsJson);

  return (
    <section className="w-full">
      <YearRangeFilter
        years={yearRanges}
        value={filters.yearRanges}
        onChange={handleChangeYear}
      />
      <CoinList coins={filteredCoins} />
    </section>
  );
}
