import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../Context/ProductsProvider';
import { FaAngellist } from "react-icons/fa6";

const Navbar = () => {

    const { state: { cart, wishlist } } = useProducts();

    return (
        <div className="navbar bg-base-100 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className="flex justify-around items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <h2 className="font-semibold text-lg ml-2 cursor-pointer">Moon Tech</h2>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/about"><li>Products</li></Link>
                        <Link to="/topRated"><li>Top Rated</li></Link>
                        <Link to="/cart"><li>Cart</li></Link>
                        <Link to="/wishlist"><li>Wishlist</li></Link>
                        <Link to="/useReducerPractice"><li>useReducerPractice</li></Link>
                    </ul>
                </div>
            </div>
            <div className=" w-full">
                <div className="flex justify-evenly items-center w-full">
                    <Link to="/home">Home</Link>
                    <Link to="/about">Products</Link>
                    <Link to="/topRated">Top Rated</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/useReducerPractice">useReducerPractice</Link>
                </div>
            </div>
            <div className="navbar-end">
                <Link to="/wishlist">
                    <div className="indicator">
                        <FaAngellist className="w-5 h-5" />
                        <span className="badge badge-xs badge-primary indicator-item">{wishlist?.length}</span>
                    </div>
                </Link>
                <button className="btn btn-ghost btn-circle">
                    <Link to="/cart">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item">{cart?.length}</span>
                        </div>
                    </Link>
                </button>
            </div>
        </div>

    );
};

export default Navbar;

