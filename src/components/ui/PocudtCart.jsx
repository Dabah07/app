import Link from "next/link";

const ProductCart = ({ product }) => {
    return (
        <div className="texte-center flex flex-col gap-4">
            <Link href="/products">
                <img src={ `http://localhost:3000/${product.image}` }/>
                <h2 className="text-start font-medium ">{product.name}</h2>
                <p className="text-start font-bold ">{product.price}</p>
            </Link>
        </div>
    );
};

export default ProductCart;