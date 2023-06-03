"use client";

import { useState } from "react";

import CoinList from "@/components/CoinList";
import YearRangeFilter from "@/components/filters/YearRangeFilter";
import { CoinType, FiltersType, YearRange } from "@/types/index.types";

import coinsJson from "@/data/coins.json";
import yearsJson from "@/data/years.json";
import countriesJson from "@/data/countries.json";

import { buildYearRanges } from "@/helpers/years";
import CountryFilter from "@/components/filters/CountryFilter";

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

    if (filters?.country?.length > 0) {
      return filters.country.some((c) => {
        return c === coin.country;
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

  const handleChangeCountry = (value: string) => {
    const isActive = filters.country?.some((y) => y === value);

    setFilters({
      ...filters,
      country: isActive
        ? filters.country?.filter((yr) => yr !== value)
        : [...(filters?.country ?? []), value],
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
      <CountryFilter
        countries={countriesJson}
        value={filters.country}
        onChange={handleChangeCountry}
      />
      <CoinList coins={filteredCoins} />
    </section>
  );
}
