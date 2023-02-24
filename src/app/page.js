import { getAllProducts } from '../../utils/shopify'

export default async function Home() {
  const products = await getAllProducts()
  return (
    <main className='font-bold'>
      Home page
      {JSON.stringify(products)}
      {console.log(products)}
    </main>
  )
}
