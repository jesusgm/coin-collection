interface ICountryFilterProps {
  countries: string[];
  value?: string[];
  onChange: (value: string) => void;
}

function CountryFilter({ countries, value, onChange }: ICountryFilterProps) {
  const handleClick = (country: string) => {
    onChange(country);
  };

  return (
    <div className="mb-3">
      <h3 className="text-xl">Country</h3>
      <ul className="flex flex-row gap-2 flex-wrap">
        {countries.map((country) => {
          const isActive = value?.find((y) => y === country);
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
