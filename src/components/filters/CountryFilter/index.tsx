"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface ICountryFilterProps {
  countries: string[];
}

function CountryFilter({ countries }: ICountryFilterProps) {
  const router = useRouter();
  const params = useSearchParams();
  const countryParam = params.get("country")?.split(",") ?? [];
  const pathname = usePathname();

  const handleClick = (country: string) => {
    const isActive = countryParam?.some((c) => c === country);
    const newParams = new URLSearchParams(params.toString());
    newParams.delete("country");

    const newCountryParam = isActive
      ? countryParam?.filter((c) => c !== country)
      : [...countryParam, country];

    if (newCountryParam.length > 0) {
      newParams.set("country", newCountryParam.join(","));
    }
    const search = newParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="mb-3">
      <h3 className="text-xl">Country</h3>
      <ul className="flex flex-row gap-2 flex-wrap">
        {countries.map((country) => {
          const isActive = countryParam?.some(
            (c) => c.toLowerCase() === country.toLowerCase()
          );
          return (
            <li
              key={country}
              className={`cursor-pointer border pt-2 pb-2 pl-4 pr-4 rounded-sm ${
                isActive ? "bg-blue-200" : "bg-gray-200"
              }`}
              onClick={() => handleClick(country)}
            >
              {country}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CountryFilter;
