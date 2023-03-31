import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const title = 'Helsinki City Bikes';
  return (
    <Layout
      title={title}
      description="Show data about Helsinki City Bike trips and stations"
    >
      <div>
        <h1>{title}</h1>
        <div>
          This app will show data about Helsinki City Bike trips and stations.
        </div>
      </div>
    </Layout>
  );
};

export default Home;
