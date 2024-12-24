import ProductForm from '@/components/ui/productForm';

export default async function EditProduct({params}) {
    return (
        <>
            <h1 className="text-center font-semibold text-2xl mb-5">Edit Product</h1>
            <ProductForm id={params.id}/>
        </>
    )
}