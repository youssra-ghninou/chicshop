import { getAllCollections, getAllProducts } from '../../utils/shopify'

export default async function Home() {
  const products = await getAllProducts()
  const collections = await getAllCollections()
  return (
    <main className='font-bold'>
      Home page
      {JSON.stringify(products)}
      {JSON.stringify(collections)}
      {console.log(collections)}
    </main>
  )
}
