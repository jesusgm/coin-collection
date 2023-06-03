import countries from "@/data/countries.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(countries), {
    headers: { "content-type": "application/json" },
  });
}
