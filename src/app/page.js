import Link from 'next/link'
import { uid } from 'uid'
import { getAllCollections } from '../../utils/shopify'

export default async function Home() {
  // const products = await getAllProducts()
  const collections = await getAllCollections()
  return (
    <main className='font-bold'>
      {/* {JSON.stringify(products)} */}
      {collections.map(({ node }) => {
        return (
          <div key={uid()}>
            <Link href={node.handle}>{node.handle}</Link>
          </div>
        )
      })}
    </main>
  )
}
