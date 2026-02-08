import { Link } from "react-router-dom";
import { useState } from "react";
import Products from "./data/Products";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";


function Home() {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const filteredProducts = Products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()));
return (
         <>
        <div className="text-end ">
        <i  className="bi bi-search text-end"></i>
        <input type="text" placeholder="search" className="m-4 rounded fs-6 px-3" value={search}
         onChange={(e) => setSearch(e.target.value)}></input>
       </div>

       <div className="container">
         <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
           <div
          key={item.id}
          className="card mx-3 my-4"
          style={{ width: "180px" }}
        >
          <img
            src={process.env.PUBLIC_URL + item.image}
            alt={item.name}
            className="card-img-top"
          />

          <div className="card-body">
            <div className="card-title">
              {item.name} - ₹{item.price}
            </div>
            <div className="card-text">{item.description}</div>
            <button className="btn btn-dark mt-3" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))
        
    ) : (
         <p className="text-center mt-4">No products found</p>
         )}
        </div>
       </div>
       <Link to="/Sports" className="btn btn-dark mx-5 my-5">Next</Link> 
    </>
    );
}
export default Home;