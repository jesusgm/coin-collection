import coins from "@/data/coins.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const [, id] = request.url.split("coins/");

  const parsedId = parseInt(id as string, 10);

  const filteredCoins = coins.find((coin) => coin.id === parsedId);

  return NextResponse.json(filteredCoins);
}
