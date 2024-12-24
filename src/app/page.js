import Link from 'next/link'
import axios from 'axios'
import ProductCart from '@/components/ui/PocudtCart'

export default async function products() {
  const res = await axios.get('http://localhost:3000/qyosk/products')
  const products = res.data
  return (
    <>
      <h1>Products</h1>
      <div>
        <Link href="/products/create">Add Product</Link>
      </div>
      {
        products.length > 0 ? 
          <div>
            {
              products.map(product => (
                <ProductCart key={product._id} product={product} />
              ))
            }
          </div>
          : <h1>No Products</h1>
      }
    </>
  )
}