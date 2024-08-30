"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {

    const [activeTab, setActiveTab] = useState('/');

    return (
        <>

            <nav >
                <div className='bg-white w-[100%] h-[80px] flex gap-3 items-center'>
                    <Link href={"/"}>
                        <div className={`p-6 font-bold ${activeTab === '/' ? 'text-green-500 border-b-4 border-green-500' : 'bg-slate-200'}`}
                            onClick={() => setActiveTab('/')}
                        >
                            Home
                        </div>
                    </Link>

                    <Link href={"/reports"}>
                        <div
                            className={`p-6 font-bold ${activeTab === '/reports' ? 'text-green-500 border-b-4 border-green-500' : 'bg-slate-200'}`}
                            onClick={() => setActiveTab('/reports')}
                        >
                            Reports
                        </div>
                    </Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar