import years from "@/data/years.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(years), {
    headers: { "content-type": "application/json" },
  });
}
