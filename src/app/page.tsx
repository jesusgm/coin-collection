import CoinList from "@/components/CoinList";
import YearRangeFilter from "@/components/filters/YearRangeFilter";
import { CoinType, YearRange } from "@/types/index.types";

import CountryFilter from "@/components/filters/CountryFilter";

export const revalidate = 60;

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
      console.log({ countryFilter });
      matchCountry = matchCountry = countryFilter.some((c) => {
        return c.toLowerCase() === coin.country.toLowerCase();
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
