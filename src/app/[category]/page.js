import { ShopifyData } from 'utils/shopify'

export default async function Products(category) {
  // const products = await getAllProducts()
  console.log(category)
  return (
    <main className='font-bold'>
      {JSON.stringify(category)}
      {/* {collections.map(({ node }) => {
        return <div key={uid()}>{node.handle}</div>
      })} */}
    </main>
  )
}

export async function generateStaticParams() {
  const gql = String.raw
  const collectionsAll = await ShopifyData(
    gql`
      query getCollections {
        collections(first: 10) {
          edges {
            node {
              handle
            }
          }
        }
      }
    `,
  )
  return collectionsAll.data.collections.edges
    ? collectionsAll.data.collections.edges.map(({ node }) => ({
        category: node.handle,
      }))
    : []
}
