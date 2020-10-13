import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout title="Home">
      <h4>Welcome to the Home page</h4>
      <Link href="/about">
        <a>Go to about</a>
      </Link>
    </Layout>
  )
}

export default Index
