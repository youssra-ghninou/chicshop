import { getAllProducts } from 'context/getAllProducts'

export default function Home({ products }) {
  return (
    <main className='font-bold'>
      Home page{products}
      {console.log(products)}
    </main>
  )
}

export const getStaticProps = async (context) => {
  const products = await getAllProducts()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}
