
import { useState } from "react"
import toast from "react-hot-toast"
import { useProductStore } from "../store/product";

function Create() {

    const[productData, setProductData] = useState({
        name: "",
        price: "",
        image: "",
    });

    const {createProduct} = useProductStore();

    const handleCreate = async () => {
        const {success, message} = await createProduct(productData);
        console.log(`Success: ${success}, Message: ${message}`);
        if(success){
            toast.success(message, {position:"top-center"});
            setProductData({
                name: "",
                price: "",
                image: "",
            });
        }else{
            toast.error(message, {position:"top-center"});
        }
    }

  return (
    <div className="w-full h-full flex items-center justify-center p-12">
        <div className="w-[100%] md:w-1/2 lg:w-1/3 flex flex-col gap-2 p-4 bg-base-200 shadow-lg rounded-md">
            <label className="input input-bordered flex items-center gap-2 bg-base-200">
                Product:
                <input type="text" className="grow" placeholder="Enter Name" value={productData.name}  onChange={(e) => setProductData({...productData, name: e.target.value})}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-base-200">
                Price:
                <input type="text" className="grow" placeholder="Enter Price"  value={productData.price}  onChange={(e) => setProductData({...productData, price: e.target.value})}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-base-200">
                Image:
                <input type="text" className="grow" placeholder="Enter Image Link" value={productData.image}  onChange={(e) => setProductData({...productData, image: e.target.value})}/>
            </label>

            <button className="btn btn-outline btn-success" onClick={handleCreate}>Success</button>
        </div>

    </div>
  )
}

export default Create