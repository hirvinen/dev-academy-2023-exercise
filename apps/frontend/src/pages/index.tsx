import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const title: string = 'Helsinki City Bikes'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Show data about Helsinki City Bike trips and stations" />
      </Head>
      <div>
        <h1>{title}</h1>
        <div>
          This app will show data about Helsinki City Bike trips and stations.
        </div>
      </div>
    </>
  );
};

export default Home;
