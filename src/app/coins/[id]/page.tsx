import { CoinType } from "@/types/index.types";
import Link from "next/link";

import data from "@/data/coins.json";
import { NextPageContext } from "next";
import Image from "next/image";

function Coin({ params }: { params: { id: string } }) {
  const { id } = params;

  const coin = data.find((coin) => coin.id === id);

  if (!coin) {
    return <div>Not found</div>;
  }
  const { name, year, country, images, value } = coin;

  return (
    <section className="w-full">
      <Link href="/">Atrás</Link>
      <h1>
        Name: {value} {name}
      </h1>
      <p>Year: {year}</p>
      <p>Country: {country}</p>

      <p>Images:</p>
      <div className="w-full flex flex-row">
        <Image alt="Front image" src={images.front} width={500} height={500} />
        <Image alt="Back image" src={images.back} width={500} height={500} />
      </div>
    </section>
  );
}

export default Coin;
