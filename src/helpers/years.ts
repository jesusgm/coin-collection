import { YearRange } from "@/types/index.types";

function getMinYear(year: number) {
  return Math.floor(year / 10) * 10;
}

function getMaxYear(year: number) {
  return Math.ceil(year / 10) * 10;
}

export function buildYearRanges(years: number[]): YearRange[] {
  const minYear = getMinYear(Math.min(...years));
  const maxYear = getMaxYear(Math.max(...years));

  let yearsRange = [];
  for (let i = minYear; i <= maxYear; i += 10) {
    yearsRange.push({
      start: i,
      end: i + 10,
    });
  }

  return yearsRange;
}
