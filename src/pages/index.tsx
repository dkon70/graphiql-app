import { useFetch } from '@/lib/utils';
import Layout from './layout';
import Hero from '@/components/Main';

export default function Home() {
  useFetch()
  return(
    <Layout>
      <Hero />
    </Layout>
  )

}
