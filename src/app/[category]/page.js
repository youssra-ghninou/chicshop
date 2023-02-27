import { uid } from 'uid'
import { getAllCollections } from 'utils/shopify'

export default async function Products() {
  // const products = await getAllProducts()
  const collections = await getAllCollections()
  return (
    <main className='font-bold'>
      {/* {JSON.stringify(products)} */}
      {collections.map(({ node }) => {
        return <div key={uid()}>{node.handle}</div>
      })}
    </main>
  )
}
