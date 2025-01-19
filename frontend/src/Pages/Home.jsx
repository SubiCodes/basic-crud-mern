import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"
import { useEffect } from "react";
import Card from "../Components/Card.jsx";

function Home() {

    const {fetchProduct, products} = useProductStore();

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct]);

    return (
        <div className="w-full flex flex-wrap gap-4 z-0">
          {products && products.length > 0 ? (
            products.map((product) => {
                return(
                <Card key={product._id} product={product}/>
                )
            })
          ) : (
            <div className="w-full h-auto flex items-center justify-center gap-2 p-20">
              <h1 className="text-lg font-bold text-base">No products yet 😭</h1>
              <Link to="/create" className="text-lg font-bold text-secondary underline">
                Add a product
              </Link>
            </div>
          )}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
        </div>   
      );
}

export default Home