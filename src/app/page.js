import MobileCategories from '@/components/mobile/MobileCategories'
import MobileProductsCarousel from '@/components/mobile/MobileProductsCarousel'

import {
  getAllCollections,
  getAllProducts,
  getAllProductsInAutomatedCollection,
  getAllProductsInFrontPage,
  getAllProductsInHydrogen,
} from '../../utils/shopify'

export default async function Home() {
  const Hydrogenproducts = await getAllProductsInHydrogen()
  const Frontpageproducts = await getAllProductsInFrontPage()
  const AutomatedCollection = await getAllProductsInAutomatedCollection()
  const collections = await getAllCollections()
  const products = await getAllProducts()
  return (
    <main className='font-bold'>
      <h1 className='text-blue-500'>All Collections</h1>
      <MobileCategories data={collections} />
      <h1 className='text-red-500'>Automated Collection Products</h1>
      <MobileProductsCarousel data={AutomatedCollection} />
      <h1 className='text-red-500'>Hydrogen Products</h1>
      <MobileProductsCarousel data={Hydrogenproducts} />
      <h1 className='text-green-500'>Frontpage Products</h1>
      <MobileProductsCarousel data={Frontpageproducts} />
      {/* <h1 className='text-blue-500'>Recommended items</h1>
      <MobileProductsCarousel data={products} /> */}
    </main>
  )
}
