import ProductCard from "./ProductCard";

function Products() {

const products=[

{
id:1,
name:"iPhone 16 Pro",
price:"₹1,35,999",
rating:"★★★★★",
badge:"NEW",
image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.news_app_ed.jpg"
},

{
id:2,
name:"MacBook Air M2",
price:"₹1,09,999",
rating:"★★★★★",
badge:"HOT",
image:"https://www.notebookcheck.net/fileadmin/_processed_/4/2/csm_IMG_9062_c665417966.jpg"
},

{
id:3,
name:"AirPods Pro",
price:"₹24,999",
rating:"★★★★★",
badge:"SALE",
image:"https://www.techhive.com/wp-content/uploads/2023/04/AirPods-Pro-2nd-gen-hero.jpg?quality=50&strip=all"
},

{
id:4,
name:"Apple Watch",
price:"₹45,999",
rating:"★★★★☆",
badge:"TRENDING",
image:"https://www.apple.com/assets-www/en_IN/watch/02_value_props/small/education_918f650ff_2x.jpg"
},

{
id:5,
name:"Gaming Laptop",
price:"₹1,39,999",
rating:"★★★★★",
badge:"PRO",
image:"https://rog.asus.com/media/1725939492117.jpg"
},

{
id:6,
name:"Mechanical Keyboard",
price:"₹8,999",
rating:"★★★★☆",
badge:"NEW",
image:"https://thegadgetflow.com/wp-content/uploads/2021/05/Top-5-mechanical-keyboards-for-your-workspace-blog-featured.jpeg"
},

{
id:7,
name:"Gaming Headset",
price:"₹5,000",
rating:"★★★★★",
badge:"NEW",
image:"https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470/fwebp"
},

{
id:8,
name:"Console",
price:"₹5,999",
rating:"★★★★☆",
badge:"NEW",
image:"https://static.vecteezy.com/system/resources/previews/066/608/774/large_2x/nextgen-console-controller-in-colorful-smoke-immersive-gaming-experience-technology-and-entertainment-cool-design-free-photo.jpg"
},

{
id:9,
name:"Mouse",
price:"₹4,999",
rating:"★★★★★",
badge:"NEW",
image:"https://assetsio.gnwcdn.com/g502x_f9QuuM8.jpeg?width=690&quality=85&format=jpg&dpr=3&auto=webp"
}
];

return(

<div className="productsPage">

<h1 className="productsTitle">

Featured Collection

</h1>

<p className="productsSubtitle">

Designed for creators, gamers and innovators.

</p>

<div className="searchBox">

<input

type="text"

placeholder="Search premium products..."

 />

</div>

<div className="productGrid">

{

products.map((item)=>(

<ProductCard

key={item.id}

name={item.name}

price={item.price}

rating={item.rating}

badge={item.badge}

image={item.image}

/>

))

}

</div>

</div>

)

}

export default Products;