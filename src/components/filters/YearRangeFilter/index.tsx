import { YearRange } from "@/types/index.types";

interface IYearRangeFilterProps {
  years: YearRange[];
  value?: YearRange[];
  onChange: (value: YearRange) => void;
}

function YearRangeFilter({ years, value, onChange }: IYearRangeFilterProps) {
  const handleClickYear = (yearClick: YearRange) => {
    onChange(yearClick);
  };

  return (
    <div className="mb-3">
      <h3 className="text-xl">Year</h3>
      <ul className="flex flex-row gap-2 flex-wrap">
        {years.map((year) => {
          const isActive = value?.find(
            (y) => y.start === year.start && y.end === year.end
          );
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
