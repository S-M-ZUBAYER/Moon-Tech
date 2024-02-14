import React from 'react';
import { useProducts } from '../../Context/ProductsProvider';
import { productActionTypes } from '../../ProductState/productsActionTypes';

const ProductCard = ({ product }) => {

    const {dispatch}=useProducts();
    
    return (
        <div className="card w-96 shadow-xl bg-white">
            <figure><img className="w-full h-72 " src={product?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product?.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                    {product?.description && product.description.length > 150 ? (
                        product.description.slice(0, 150) + "..."
                    ) : (
                        product?.description
                    )}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline px-1 py-1 font-semibold">Users: {product?.user}</div>
                    <div className={`badge badge-outline  px-1 py-1 font-semibold  ${product?.rating >= 4 ? "text-green-600" : "text-red-800"}`}>Rating: {product?.rating}</div>
                </div>
                <div className="flex gap-2">
                <button onClick={()=>dispatch({type:productActionTypes.Add_TO_CART, payload:product})} className=" w-4/5 bg-blue-800 py-1 rounded-3xl mt-2">Add To Cart</button>
                <button onClick={()=>dispatch({type:productActionTypes.Add_TO_Wishlist, payload:product})} className="w-1/4 bg-blue-800 py-1 rounded-3xl mt-2">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;