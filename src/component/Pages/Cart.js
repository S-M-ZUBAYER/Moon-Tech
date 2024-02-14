import React from 'react';
import { useProducts } from '../../Context/ProductsProvider';
import ProductCard from './ProductCard';

const Cart = () => {
    const {state:{loading,products,error,cart}}=useProducts();

    let content;
    if (loading) {
        content = <p className="my-10 text-green-900 font-semibold text-2xl h-screen">Loading</p>
    }
    if (error) {
        content = <p className="my-10 text-red-800 font-semibold text-2xl h-screen">Something Went To Wrong In Here</p>
    }
    if (cart && cart.length < 1) {
        content = <p className="my-10 text-yellow-800 font-semibold text-2xl h-screen">No Product Available In Your Cart</p>
    }
    if (cart && cart.length > 0) {
        content = <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 mb-12 mx-auto ">
            {
                cart?.map((product, index) =>
                    <ProductCard key={index} product={product}></ProductCard>
                )
            }
        </div>
    }


    return (
        <div className="min-h-screen">
            <h1 className="font-bold text-3xl mt-8">
                All available Products In Your Cart
            </h1>
            <div className=" flex justify-center ">
                {content}
            </div>
        </div>
    );
};

export default Cart;