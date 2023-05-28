import { useState } from "react";

function Coin({ id, year, country, images }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      data-year={year}
      data-country={country}
      class="relative flex items-center justify-center overflow-hidden"
    >
      <a href={`/coin-collection/coins/${id}`}>
        <img
          class={`backface-hidden w-52 h-52 object-cover rounded-lg border ${
            isHover ? "hidden" : ""
          }`}
          src={images.front}
        />
        <img
          class={`w-52 h-52 object-cover rounded-lg border ${
            isHover ? "" : "hidden"
          }`}
          src={images.back}
        />
      </a>
    </li>
  );
}

export default Coin;
