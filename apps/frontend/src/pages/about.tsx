import { NextPage } from 'next'
import Layout from '../components/Layout'

const About: NextPage = () => {
  const title = "About Helsinki City Bikes";
  return <div>
    <Layout title={title}>
      <h1>{title}</h1>
      <p>
        This is an application to show historical data about Helsinki City Bike trips and stations.
      </p>
      <p>
        Its main purpose is to showcase some aspects of how I work with software. See <a href="https://github.com/hirvinen/dev-academy-2023-exercise">source on github</a> for more information.
      </p>
    </Layout>
  </div>
}

export default About