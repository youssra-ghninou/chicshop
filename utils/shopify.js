export async function ShopifyData(query) {
  const URL = `https://${process.env.NEXT_PUBLIC_API_URL}/api/2023-01/graphql.json`
  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token':
        process.env.NEXT_PUBLIC_STORE_ACCESS_TOKEN,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }
  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })
    return data
  } catch (error) {
    throw new Error('Products not fetched')
  }
}
export async function getAllProducts() {
  const gql = String.raw
  const query = gql`
    {
      products(first: 9) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 9) {
              edges {
                node {
                  altText
                }
              }
            }
          }
        }
      }
    }
  `
  const response = await ShopifyData(query)
  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : []
  return allProducts
}
export async function getAllProductsInHydrogen() {
  const gql = String.raw
  const query = gql`
    query getProductsInCollection {
      collection(handle: "hydrogen") {
        title
        products(first: 50, sortKey: BEST_SELLING) {
          edges {
            node {
              id
              title
              availableForSale
              images(first: 1) {
                edges {
                  node {
                    url
                    width
                    height
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  `
  const response = await ShopifyData(query)
  const allProductsInHydrogen = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : []
  return allProductsInHydrogen
}
export async function getAllProductsInFrontPage() {
  const gql = String.raw
  const query = gql`
    query getProductsInCollection {
      collection(handle: "frontpage") {
        title
        products(first: 50, sortKey: BEST_SELLING) {
          edges {
            node {
              id
              title
              availableForSale
              images(first: 1) {
                edges {
                  node {
                    url
                    width
                    height
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  `
  const response = await ShopifyData(query)
  const allProductsInFrontpage = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : []
  return allProductsInFrontpage
}

export async function getAllCollections() {
  const gql = String.raw
  const query = gql`
    query getCollections {
      collections(first: 10) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `
  const response = await ShopifyData(query)
  const allCollections = response.data.collections.edges
    ? response.data.collections.edges
    : []
  return allCollections
}
