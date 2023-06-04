import CoinList from "@/components/CoinList";
import YearRangeFilter from "@/components/filters/YearRangeFilter";
import { CoinType, YearRange } from "@/types/index.types";

// import coinsJson from "@/data/coins.json";
// import yearsJson from "@/data/years.json";
// import countriesJson from "@/data/countries.json";

import { buildYearRanges } from "@/helpers/years";
import CountryFilter from "@/components/filters/CountryFilter";

export default async function Home({
  searchParams,
}: {
  searchParams: { year: string; country: string };
}) {
  // parse search params
  const yearFilter = searchParams?.year?.split(",").map((yr) => {
    const [start, end] = yr.split("-");
    return { start: parseInt(start, 10), end: parseInt(end, 10) } as YearRange;
  });
  const countryFilter = searchParams?.country?.split(",");

  const apiParams = new URLSearchParams();
  if (yearFilter?.length > 0) {
    apiParams.append(
      "year",
      yearFilter.map((yr) => `${yr.start}-${yr.end}`).join(",")
    );
  }
  if (countryFilter?.length > 0) {
    apiParams.append("country", countryFilter.join(","));
  }

  console.log(
    `${process.env.NEXT_PUBLIC_API_PATH}/coins?${apiParams.toString()}`
  );

  const coinsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/coins?${apiParams.toString()}`
  );
  const coinsJson: CoinType[] = await coinsRes.json();

  const filteredCoins = coinsJson.filter((coin) => {
    let matchYear = true;
    let matchCountry = true;

    if (yearFilter?.length > 0) {
      matchYear = yearFilter.some((yr) => {
        const {} = yearFilter;
        return yr.start <= coin.year && yr.end >= coin.year;
      });
    }

    if (countryFilter?.length > 0) {
      matchCountry = countryFilter.some((c) => {
        return c === coin.country;
      });
    }

    return matchCountry && matchYear;
  });

  return (
    <section className="w-full">
      <YearRangeFilter />
      <CountryFilter />
      <CoinList coins={filteredCoins} />
    </section>
  );
}
