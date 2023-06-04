"use client";

import { useState } from "react";
import { CoinType } from "../types/index.types";
import Image from "next/image";
import Link from "next/link";

function Coin({
  id,
  year,
  country,
  images,
  name,
  value,
  other,
  index,
}: CoinType & { index: number }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      data-year={year}
      data-country={country}
      className="relative flex items-center justify-center overflow-hidden"
    >
      <Link href={`/coins/${id}`}>
        <Image
          className={`backface-hidden w-52 h-52 object-cover rounded-lg border ${
            isHover ? "hidden" : ""
          }`}
          src={images.front}
          width={208}
          height={208}
          loading={index > 18 ? "lazy" : "eager"}
          alt={name}
        />
        <Image
          className={`w-52 h-52 object-cover rounded-lg border ${
            isHover ? "" : "hidden"
          }`}
          src={images.back}
          width={208}
          height={208}
          loading={index > 18 ? "lazy" : "eager"}
          alt={name}
        />
      </Link>
      <span className="absolute top-2">
        {value} {name}
      </span>
      <span className="absolute bottom-10">{year}</span>
      <span className="absolute bottom-2">{country}</span>
    </li>
  );
}

export default Coin;
