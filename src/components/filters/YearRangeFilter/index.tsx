"use client";

import { buildYearRanges } from "@/helpers/years";
import { YearRange } from "@/types/index.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function YearRangeFilter() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const [years, setYears] = useState<YearRange[]>([]);
  useEffect(() => {
    const fetchYears = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/years`);
      const yearsJson: number[] = await res.json();
      const yearRanges = buildYearRanges(yearsJson);
      setYears(yearRanges);
    };
    fetchYears();
  }, []);

  const yearParam =
    params
      .get("year")
      ?.split(",")
      ?.map((range) => {
        const [start, end] = range.split("-");
        return {
          start: parseInt(start, 10),
          end: parseInt(end, 10),
        } as YearRange;
      }) ?? [];

  const handleClickYear = (yearClick: YearRange) => {
    const isActive = yearParam?.some((yr) => {
      return yr.start === yearClick.start && yr.end === yearClick.end;
    });

    const newParams = new URLSearchParams(params.toString());
    newParams.delete("year");

    const newYearParam = isActive
      ? yearParam?.filter(
          (yr) => yr.start !== yearClick.start && yr.end !== yearClick.end
        )
      : [...yearParam, yearClick];

    if (newYearParam.length > 0) {
      newParams.set(
        "year",
        newYearParam.map((yr) => `${yr.start}-${yr.end}`).join(",")
      );
    }
    const search = newParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="mb-5">
      <h3 className="text-xl">Year</h3>
      <ul className="flex flex-row gap-2 flex-wrap">
        {years.map((year) => {
          const isActive = yearParam?.find(
            (y) => y.start === year.start && y.end === year.end
          );
          // console.log({ year, isActive });
          return (
            <li
              key={`${year.start}-${year.end}`}
              className={`cursor-pointer border pt-2 pb-2 pl-4 pr-4 rounded-sm ${
                isActive ? "bg-blue-200" : "bg-gray-200"
              }`}
              onClick={() => handleClickYear(year)}
            >
              {year.start} - {year.end}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default YearRangeFilter;
