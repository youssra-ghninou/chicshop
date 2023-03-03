import Link from 'next/link'
import { uid } from 'uid'
import {
  getAllCollections,
  getAllProducts,
  getAllProductsInFrontPage,
  getAllProductsInHydrogen,
} from '../../utils/shopify'

export default async function Home() {
  const Hydrogenproducts = await getAllProductsInHydrogen()
  const Frontpageproducts = await getAllProductsInFrontPage()
  const collections = await getAllCollections()
  const products = await getAllProducts()
  return (
    <main className='font-bold'>
      <h1 className='text-blue-500'>All Collections</h1>
      {collections.map(({ node }) => {
        return (
          <div key={uid()}>
            <Link href={node.handle}>{node.handle}</Link>
          </div>
        )
      })}
      <h1 className='text-red-500'>Hydrogen Products</h1>
      {Hydrogenproducts.map(
        ({
          node: {
            title,
            availableForSale,
            images: { edges },
            priceRange: {
              minVariantPrice: { amount, currencyCode },
            },
          },
        }) => {
          return (
            <div key={uid()}>
              {title} {availableForSale}
              {edges.map(({ node: { url, width, height, altText } }) => {
                return (
                  <div key={uid()}>
                    url : {url} width:{width} height:{height} alt:{altText}
                  </div>
                )
              })}
              {amount} {currencyCode}
            </div>
          )
        },
      )}
      <h1 className='text-green-500'>Frontpage Products</h1>
      {Frontpageproducts.map(
        ({
          node: {
            title,
            availableForSale,
            images: { edges },
            priceRange: {
              minVariantPrice: { amount, currencyCode },
            },
          },
        }) => {
          return (
            <div key={uid()}>
              {title} {availableForSale}
              {edges.map(({ node: { url, width, height, altText } }) => {
                return (
                  <div key={uid()}>
                    url : {url} width:{width} height:{height} alt:{altText}
                  </div>
                )
              })}
              {amount} {currencyCode}
            </div>
          )
        },
      )}
      <h1 className='text-blue-500'>Recommended items</h1>
      {products.map(
        ({
          node: {
            title,
            availableForSale,
            images: { edges },
            priceRange: {
              minVariantPrice: { amount, currencyCode },
            },
          },
        }) => {
          return (
            <div key={uid()}>
              {title} {availableForSale}
              {edges.map(({ node: { url, width, height, altText } }) => {
                return (
                  <div key={uid()}>
                    url : {url} width:{width} height:{height} alt:{altText}
                  </div>
                )
              })}
              {amount} {currencyCode}
            </div>
          )
        },
      )}
    </main>
  )
}
