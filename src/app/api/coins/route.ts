import coins from "@/data/coins.json";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);

  return new Response(JSON.stringify(coins), {
    headers: { "content-type": "application/json" },
  });
}
