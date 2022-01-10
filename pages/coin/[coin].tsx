import CoinChart from "@/components/CoinChart";
import InfoComponent from "@/components/InfoComponent";
import WhitepaperSection from "@/components/WhitepaperSection";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Info, Overview, Timestamp, Video, Whitepaper } from "utils/types";
import { API_URL } from "@/lib/index";
import VideoComponent from "@/components/VIdeoComponent";

const SingleCoinPage = ({
  timestamp,
  whitepaper,
  info,
  video,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <CoinChart timestamp={timestamp} />

      <section className="wrapper">
        <InfoComponent info={info} />
        <WhitepaperSection whitepaper={whitepaper} />
        <VideoComponent video={video} />
      </section>
    </div>
  );
};

export default SingleCoinPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/overview`);
  const coins: Overview[] = await res.json();

  const paths = coins.map((coin) => ({
    params: {
      coin: coin.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const devInfoRes = await fetch(`${API_URL}/${params?.coin}/development`);
  // const devInfo = await devInfoRes.json();

  const whitepaperRes = await fetch(`${API_URL}/${params?.coin}/whitepaper`);
  const whitepaper: Whitepaper = await whitepaperRes.json();

  // const priceRes = await fetch(`${API_URL}/${params?.coin}/price`);
  // const price = await priceRes.json();

  const videoRes = await fetch(`${API_URL}/${params?.coin}/video`);
  const video: Video = await videoRes.json();

  const infoRes = await fetch(`${API_URL}/${params?.coin}/infohub`);
  const info: Info = await infoRes.json();

  const timestampRes = await fetch(`${API_URL}/${params?.coin}/price/history?timerange=all`);
  const timestamp: Timestamp = await timestampRes.json();

  return {
    props: { timestamp, info, whitepaper, video },
  };
};
