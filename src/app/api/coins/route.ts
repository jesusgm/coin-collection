import coins from "@/data/coins.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const filteredCoins = coins.filter((coin) => {
    if (searchParams.has("year")) {
      const yearRanges = searchParams.get("year")?.split(",");

      return yearRanges?.some((yearRange) => {
        const [start, end] = yearRange.split("-");
        return coin.year >= Number(start) && coin.year <= Number(end);
      });
    }

    if (searchParams.has("country")) {
      const countries = searchParams.get("country")?.split(",");
      return countries?.includes(coin.country);
    }

    return true;
  });

  return NextResponse.json(filteredCoins);
}
