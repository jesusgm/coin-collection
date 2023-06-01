import { useState } from "react";
import { CoinType } from "../types/index.types";

function Coin({ id, year, country, images, name, value, other }: CoinType) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      data-year={year}
      data-country={country}
      className="relative flex items-center justify-center overflow-hidden"
    >
      <a href={`/coin-collection/coins/${id}`}>
        <img
          className={`backface-hidden w-52 h-52 object-cover rounded-lg border ${
            isHover ? "hidden" : ""
          }`}
          src={images.front}
          loading="lazy"
        />
        <img
          className={`w-52 h-52 object-cover rounded-lg border ${
            isHover ? "" : "hidden"
          }`}
          src={images.back}
          loading="lazy"
        />
      </a>
      <span className="absolute top-2">
        {value} {name}
      </span>
      <span className="absolute bottom-10">{year}</span>
      <span className="absolute bottom-2">{country}</span>
    </li>
  );
}

export default Coin;
