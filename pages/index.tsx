import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { API_URL } from "@/lib/index";
import { Overview } from "utils/types";

import { ReactNode } from "react";
import addComma from "utils/addComma";
import Link from "next/link";

const Home = ({ overview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Coin Agreggator</title>
      </Head>

      <div className="wrapper my-3">
        <h1 className="text-2xl text-center w-full mb-5 font-bold">COIN Agreggator</h1>
        <table className="table-fixed border-collapse w-full">
          <thead>
            <tr className="bg-gray-300">
              <TH>Rank</TH>
              <TH>Name</TH>
              <TH>Price</TH>
              <TH>1h Change</TH>
              <TH>24h Change</TH>
              <TH>7d Change</TH>
              <TH>MarketCap</TH>
              <TH>Coinpaper Scores</TH>
            </tr>
          </thead>

          <tbody>
            {overview
              ?.sort((a: Overview, b: Overview) => a?.rank - b?.rank)
              ?.map((coin: Overview) => (
                <tr key={coin.id}>
                  <td># {coin.rank}</td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>
                        {coin.name} ({coin.symbol})
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>${coin?.price.toFixed(2)}</a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>{coin.price_1h_percentage_change}%</a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>{coin.price_24h_percentage_change}%</a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>{coin.price_7d_percentage_change}%</a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>${addComma(Number(coin?.market_cap.toString().slice(0, 6)))}</a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/coin/${coin.id}`}>
                      <a>{coin.scores?.coinpaper}</a>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

const TH = ({ children }: { children: ReactNode }) => {
  return <th className="text-left">{children}</th>;
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/overview`);
  const overview: Overview[] = await res.json();

  return {
    props: { overview },
  };
}
