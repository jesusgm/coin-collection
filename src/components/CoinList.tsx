import { CoinType } from "../types/index.types";
import Coin from "./Coin";

interface ICoinListProps {
  coins: CoinType[];
  coinContainerId: string;
}

function CoinList({ coins, coinContainerId }: ICoinListProps) {
  return (
    <ul
      id={coinContainerId}
      className="grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-8 items-center justify-center"
    >
      {coins.map((coin) => (
        <Coin {...coin} />
      ))}
    </ul>
  );
}

export default CoinList;
