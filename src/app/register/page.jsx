"use client";


import { useState } from "react";
import Navbar from "@/components/compon/Navbar";

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        console.log('form submitted', address, phone, username, email, password);
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, address, phone }),
            });
            if (response.ok) {
                alert('User registered successfully');
            } else {
                alert('Failed to register user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setUsername('');
        setEmail('');
        setPassword('');
        setAddress('');
        setPhone('');
    };


    return (
        <>
            <div className="">
              
                <div>


                    <h1 className="text-center items-center mt-1 font-serif font-bold "><b>Qyosk</b></h1>

                    <form className="flex flex-col gap-4  p-5 m-1 hover: border rounded max-w-96 shadow-2xl  mx-auto" onSubmit={submit}>
                        <h1 className="text-center font-serif border border- rounded py-3 text-2xl"> <i><b>Register</b></i></h1>
                       

                        <div className="flex flex-col gap-1 ">


                            <div className="flex flex-col gap-1 ">
                                <label className="font-bold  font-serif " htmlFor="username"><i>UserName :</i></label>
                                <input className="rounded py-0.5 p-2 text-black " type="text" id="username" placeholder="enter name" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>


                            <div className="flex flex-col gap-1 ">
                                <label className="font-bold font-serif" htmlFor="email"><i>Email :</i></label>
                                <input className="rounded py-0.5 text-black p-2" type="email" id="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="flex flex-col gap-1 ">
                                <label className="font-bold  font-serif" htmlFor="password"><i>Password :</i></label>
                                <input className="rounded py-0.5 text-black p-2" type="password" id="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1 ">

                                <label className="font-bold  font-serif" htmlFor="address"><i>Address :</i></label>
                                <input className="rounded text-black py-0.5 p-2" type="text" id="address" placeholder="enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>

                            <div className="flex flex-col gap-1 ">
                                <label className="font-bold  font-serif" htmlFor="phone"><i>Phone :</i></label>
                                <input className="rounded text-black py-0.5 p-2" type="number" id="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="text-center  border border-black py-0.5 px-4 m-auto rounded-md  bg-amber-400 content font-serif  text-2xl"> <button className="" type="submit">Register</button></div>
                        </div>
                    </form>
                </div>
             </div>

        </>
    )


}