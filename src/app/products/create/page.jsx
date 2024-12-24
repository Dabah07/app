"use client";
import ProductForm from "@/components/ui/ProductForm";
import { useState, useEffect } from "react";

export default function Create() {
    const [isConnected, setIsConnected] = useState(false);

    // useEffect(() => {
    //     setIsConnected(localStorage.getItem('token') ? true : false);
    // }, []);

    return (
        <>
            <h1>Create Product</h1>
            {isConnected ? (
                <ProductForm />
            ) : (
                <p>Please log in to create a product.</p>
            )}
        </>
    );
}