import { useState } from "react";
import { useProductStore } from "../store/product.js";
import toast from "react-hot-toast";

function Card({product}) {

  const {deleteProduct, updateProduct} = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleDelete = async (pid) => {
    const {success, message} = await deleteProduct(pid);
    if(success){
      toast.success(message, {position:"top-center"});
    }else{
      toast.error(message, {position:"top-center"});
    }
  } 

  const handleEdit = async () => {
    document.getElementById(product._id).showModal();
  }

  const handleChanges = async (pid,updatedProduct) => {
    console.log(updatedProduct);
    const {success, message} = await updateProduct(pid, updatedProduct);
    if(success){
      toast.success(message, {position:"top-center"});
    }else{
        toast.error(message, {position:"top-center"});
    }
  }

  return (
    <div className="card card-normal bg-base-200 w-96 shadow-xl">
        <figure>
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-[24vh] object-cover"
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="text-left">₱ {product.price}</p>
            <div className="card-actions justify-start mt-2">
                <button className="btn btn-info rounded-sm btn-sm" onClick={handleEdit}>📝</button>
                <button className="btn btn-error rounded-sm btn-sm" onClick={() => handleDelete(product._id)}>🗑️</button>
            </div>
        </div>
      <dialog id={product._id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-8">Update Product: <span className="text-green-600">{updatedProduct.name}</span></h3>
          <div className="w-full h-auto flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2 bg-base-200">
                Product:
                <input type="text" className="grow" placeholder="Enter Name" value={updatedProduct.name}  onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-base-200">
                Price:
                <input type="text" className="grow" placeholder="Enter Price"  value={updatedProduct.price}  onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-base-200">
                Image:
                <input type="text" className="grow" placeholder="Enter Image Link" value={updatedProduct.image}  onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}/>
            </label>
            <a className="w-full h-auto bg-info p-2 cursor-pointer text-white font-bold rounded-lg" onClick={() => handleChanges(updatedProduct._id, updatedProduct)}>Apply Changes</a>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Card