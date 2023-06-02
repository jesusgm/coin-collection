import { CoinType } from "../types/index.types";
import Coin from "./Coin";

interface ICoinListProps {
  coins: CoinType[];
}

function CoinList({ coins }: ICoinListProps) {
  return (
    <ul className="grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-8 items-center justify-center">
      {coins.map((coin, index) => (
        <Coin key={coin.id} {...coin} index={index} />
      ))}
    </ul>
  );
}

export default CoinList;
