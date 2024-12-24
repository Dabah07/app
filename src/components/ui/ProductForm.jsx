"use cleint";
import axios from "axios";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";




export default function productForm() {

    const operation = id ? "edit" : "create";
    const router = useRouter();
    const [product, setPRODUCT] = useState({
        name: "", price: "", image: "", description: "", catigory: "",
    });


    useEffect(() => {
        if (operation == "edit") {
            axios.get(`=http://localhost:3000/products/${id}`)
                .then((res) => setPRODUCT(res.data))
        }
    }, [])


    const change = (e) => {
        setPRODUCT({
            ...product,
            [e.target.name]: e.target.value
        })
    }


    const submit = async (e) => {
        epreventdefault();
        if (operation == "create") {
            axios.postForm('http://locolhost:3000/products', product)
            router.push('/')
        }
        else {
            axios.put(`http://localhost:3000/products/${id}`, product)
            router.push('/')
        }
    }

    const deleteProduct = async () => {
        if (confirm("dirlha promsyo lnas franda ")) {
            await axios.delete(`http://localhost:3000/products${id}`)
            router.delete('/')
        }
    }

    return (<>
        
        <form className="flex flex-col gap-4 max-w-screen-md mx-auto bg-white shadow-2xl p-8 rounded border" onSubmit={submit}>
                <div className=" flex gap-8">
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="name">Name<span className="text-red-500">*</span></label>
                        <input id="name" name="name" type="text" placeholder="Name" required value={product.name} onChange={change}
                            className="border border-black px-2 py-1.5 rounded" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="category">Category<span className="text-red-500">*</span></label>
                        <input id="category" name="category" type="text" placeholder="Category" required value={product.catigory} onChange={change}
                            className="border border-black px-2 py-1.5 rounded" />
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="price">Price<span className="text-red-500">*</span></label>
                        <input id="price" name="price" type="number" placeholder="Price" required value={product.price} onChange={change}
                            className="border border-black px-2 py-1.5 rounded" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="image">Image<span className="text-red-500">*</span></label>
                        <input id="image" name="image" type="file" placeholder="Image" required onChange={(e) => setPRODUCT({ ...product, image: e.target.files[0] })}
                            className="border border-black px-2 py-1.5 rounded" />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="description">Description<span className="text-red-500">*</span></label>
                    <textarea id="description" name="description" type="text" placeholder="Description" value={product.description} onChange={change}
                        className="border border-black px-2 py-1.5 rounded"></textarea>
                </div>
                <div className="text-right space-x-2">
                    <button type="button" className="bg-red-500 text-white px-5 py-1.5 rounded" onClick={deleteProduct}>Delete</button>
                    <button className="bg-black text-white px-5 py-1.5 rounded">Submit</button>
                </div>
            </form>
    </>)
}