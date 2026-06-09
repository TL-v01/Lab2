function ProductCard({ product, isAdded, onAdd }) {
  const buttonClass = isAdded ? 'btn btn-secondary' : 'btn btn-success'
  const buttonText = isAdded ? 'Added to cart' : 'Add to cart'

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {product.image && (
          <img src={product.image} className="card-img-top" alt={product.name} />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text mb-2 text-muted">{product.price.toLocaleString('vi-VN')} VND</p>
          <p className="card-text mb-3">
            <span className={`badge ${product.status === 'In stock' ? 'bg-success' : 'bg-warning text-dark'}`}>
              {product.status}
            </span>
          </p>
          <button type="button" className={buttonClass} onClick={() => onAdd(product.id)}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
