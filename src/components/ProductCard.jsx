function ProductCard({

image,

name,

price,

rating,

badge

}){

return(

<div className="productCard">

<div className="badge">

{badge}

</div>

<div className="wishlist">

♡

</div>

<img

src={image}

alt={name}

/>

<h2>

{name}

</h2>

<p className="rating">

{rating}

</p>

<h3>

{price}

</h3>

<div className="buttons">

<button>

Add to Cart

</button>

<button>

Buy Now

</button>

</div>

</div>

)

}

export default ProductCard;