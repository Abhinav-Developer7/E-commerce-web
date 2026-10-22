
"use client";

import React from 'react'
import { useEffect, useState } from "react";
import api from "../src/lib/Api";



export default function ProductCard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, SetError] = useState(null)
    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                SetError("")
                const response = await api.get("/api/products");
                setProducts(response.data);
            } catch (error) {
                SetError("Failed to fetch products");
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);



    return (

        <section id="collection" className="px-8 py-12">
            <p className="text-sm font-semibold tracking-widest text-rose-600">
                THE COLLECTION
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                Find your next fit
            </h2>
            {loading && <div className="mt-8 flex items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-900 border-t-transparent"></div>
            </div>
            }
            {error && <div className="mt-8 flex items-center justify-center">
                <p className="text-red-600">{error}</p>
            </div>
            }
            {products.length === 0 ? (
                <p className="mt-8 text-stone-500">
                    No products available right now.
                </p>
            ) : (
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="rounded-xl border border-stone-200 bg-white p-6"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-64 w-full object-cover"
                            />
                            <p className="text-sm text-stone-500">
                                {product.category}
                            </p>

                            <h3 className="mt-2 text-xl font-semibold">
                                {product.name}
                            </h3>

                            <p className="mt-3 font-bold">
                                ₹{product.price.toLocaleString("en-IN")}
                            </p>

                            <a
                                href="/profile"
                                className="mt-5 inline-block rounded-full border border-stone-900 px-5 py-2 text-sm hover:bg-stone-900 hover:text-white"
                            >
                                Try On →
                            </a>
                        </article>
                    ))}
                </div>
            )}
        </section>

    )
}
