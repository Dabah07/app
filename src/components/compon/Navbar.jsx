import Link from "next/link";



const Navbar = () => {
    return (<>
    <div>
        <header>
            <nav className="flex  justify-between p-3 max-w-screen-lg m-auto">
                <h1><b><i className="font-serif">Qyosk <samp className="">300</samp></i></b></h1>
                <ul className="flex font-medium justify-items-start space-x-7 ">
                    <li><Link href="/"><b><i>Home</i></b></Link></li>
                    <li><Link href='/'><i><b>Product</b></i></Link></li>
                    <li><Link href="/register"><s>Register</s></Link></li>
                    <li><Link href="/login"><s>Login</s> </Link></li>


                </ul>
            </nav>
            <hr />
        </header>
    </div>


    </>  );
}
 
export default Navbar;