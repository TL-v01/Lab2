import { useState } from 'react'
import ProductCard from './ProductCard'
import img1 from '../assets/444660163245946499.jpg'
import img2 from '../assets/download (12).jpg'
import img3 from '../assets/download (14).jpg'

const products = [
  { id: 1, name: 'Modern Blazer', price: 490000, status: 'In stock', image: img1 },
  { id: 2, name: 'Summer Shirt', price: 790000, status: 'In stock', image: img2 },
  { id: 3, name: 'Denim Jeans', price: 440000, status: 'Limited', image: img3 },
  { id: 4, name: 'Leather Boots', price: 890000, status: 'In stock', image: img1 },
  { id: 5, name: 'Silk Dress', price: 350000, status: 'Limited', image: img2 },
  { id: 6, name: 'Classic Hat', price: 420000, status: 'In stock', image: img3 },
]

function ProductList() {
  const [addedMap, setAddedMap] = useState({})

  const handleAddToCart = (id) => {
    setAddedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="product-list mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Product List</h2>
          
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isAdded={!!addedMap[product.id]}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
