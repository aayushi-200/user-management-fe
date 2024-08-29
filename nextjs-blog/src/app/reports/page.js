import React from 'react'
import '../../styles/global.css'
import { FaSearch } from "react-icons/fa";

const sections = [
    {
        title: "section1"
    },
    {
        title: "section2"
    }
]

const subSections = [
    {
        title: "Sub-Section 1"
    },
    {
        title: "Sub-Section 2"
    },
    {
        title: "Sub-Section 3"
    },
    {
        title: "Sub-Section 4"
    },
    {
        title: "Sub-Section 5"
    },
    {
        title: "Sub-Section 6"
    }
]

const Page = () => {

    return (
        <>
            <div className='bg-slate-100 h-screen w-screen flex flex-col items-center'>
                {/* <h3>Reports</h3>  */}
                <div className='w-[80%] flex bg-white mt-4 gap-1'>
                    {sections &&
                        sections.map((item, index) => {
                            const itemStyle = index === 0 ? 'bg-green-400 rounded-3xl text-black' : 'text-green-300';
                            return (
                                <p
                                    key={index}
                                    className={`px-3 py-2 rounded-3xl cursor-pointer  ${itemStyle}`}
                                >
                                    {item.title}
                                </p>
                            );
                        })
                    }
                </div>

                <div className='w-[80%] bg-white mt-4'>
                    <h2
                        className='text-2xl font-bold mt-5 ml-4'
                    >
                        Section 1 Dashboard
                    </h2>

                    <div className='mt-5 ml-4 mb-5 flex gap-2 items-center'>
                        <div className='p-1 box-content rounded-full border-2 border-gray-400 inline-block'>
                            <FaSearch />
                        </div>

                        <div className='flex gap-2'>
                            {subSections &&
                                subSections.map((item, index) => {
                                    const itemStyle = index === 0 ? 'bg-blue-600 rounded-3xl text-black' : 'bg-gray-400';
                                    return (
                                        <p
                                            key={index}
                                            className={`px-3 py-1 rounded-3xl border-2 border-black  cursor-pointer  ${itemStyle}`}
                                        >
                                            {item.title}
                                        </p>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className='bg-gray-200 w-[80%] mt-5 h-56 border-2 border-gray-400'>

                </div>

            </div>
        </>
    )
}

export default Page