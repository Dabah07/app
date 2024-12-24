"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'


export default function Login() {
    const [email, setEMAIL] = useState('')
    const [password, setPASSWORD] = useState('')

    const router = useRouter();
    const submit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/login', { email, password })
        console.log(res)
        localStorage.setItem('token', res.data.token)
        router.push('/')
    }
    return (<>
        <div>
            <div><h1 className='font-serif text-center  text-2xl m-6'><i>wolcame to my Qyosk</i></h1></div>

            <form onSubmit={submit} className='flex flex-col gap-4 p-5 m-5 hover: border rounded max-w-96 shadow-2xl  mx-auto'>
                <h1 className='font-bold text-center mb-2 text-3xl border border- py-4 rounded hover:translate-2 text-amber-400 '><i>Qyosk 300</i></h1>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-start font-bold'><i><b>Email :</b></i></label>
                    <input className='border border-black rounded-md py-1 px-2 text-black' type="email" placeholder='enter youer email ' value={email} onChange={(e) => setEMAIL(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor=""> <b><i>Password :</i></b>  </label>
                    <input className='border border-black rounded-md py-1 px-2 text-black  pr-2' type="password" placeholder='  *********' value={password} onChange={(e) => setPASSWORD(e.target.value)} />
                </div>
                <div className='text-center border border-black py-0.5 px-4 m-auto rounded-md  bg-amber-400 content font-medium  text-2xl'><button ><i>login</i></button></div>
            </form>



        </div>

    </>);
}