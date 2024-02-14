import React from 'react';
import { useProducts } from '../../Context/ProductsProvider';
import ProductCard from './ProductCard';

const TopRated = () => {
    const {state:{loading,products,error}}=useProducts();

    const RatingFilter=products?.filter(item=>item?.rating>=4);

    let content;
    if (loading) {
        content = <p>Loading</p>
    }
    if (error) {
        content = <p>Something Went To Wrong In Here</p>
    }
    if (products && products.length < 1) {
        content = <p>No Product Available At Now</p>
    }
    if (products && products.length > 0) {
        content = <div className="grid grid-cols-3 gap-7 mt-5 mb-12 mx-auto">
            {
                products?.filter(item=>item?.rating>=4)?.map((product, index) =>
                    <ProductCard key={index} product={product}></ProductCard>
                )
            }
        </div>
    }


    return (
        <div >
            <h1 className="font-bold text-3xl mt-8">
                All available Products
            </h1>
            <div className=" flex justify-center ">
                {content}
            </div>
        </div>
    );
};

export default TopRated;