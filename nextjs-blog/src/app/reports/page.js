"use client";
import React, { use, useEffect, useState } from 'react'
import '../../styles/global.css'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('../../components/lineChart'), { ssr: false });

const Page = () => {

    const [dataSource, setDataSource] = useState();
    const [sections, setSections] = useState([])
    const [subSections, setSubSections] = useState([])
    const [sectionId, setSectionId] = useState(1);
    const [subSectionId, setSubSectionId] = useState(1)
    const [chartData, setChartData] = useState({})

    const fetchDataSources = async () => {
        try {
            const response = await axios.get('http://localhost:3010/data-sources');
            if (response.status === 200) {

                setDataSource(response?.data?.[0])
                setSections(response?.data?.[0].Section)

                response?.data?.[0].Section[0]?.subSections?.length > 0 && fetchSubSectionData(subSectionId)
            }
        } catch (error) {
            console.error("Error fetching data sources:", error);
        }
    }

    const fetchSubSectionData = async () => {
        try {
            const response = await axios.get(`http://localhost:3010/sub-sections/${subSectionId}`)
            setChartData(response?.data)
        } catch (error) {
            console.error("Error fetching Subsection data:", error);
        }
    }

    useEffect(() => {
        fetchDataSources();
    }, []);


    useEffect(() => {

        sections && setSubSections(sections[sectionId - 1]?.subSections)
        sections[sectionId - 1]?.subSections?.length > 0 ? fetchSubSectionData(1) : setChartData([])

    }, [sectionId, sections])

    useEffect(() => {

        subSections?.length > 0 ? fetchSubSectionData(subSectionId) : setChartData([])

    }, [subSectionId])


    return (
        <>
            <div className='bg-slate-100 h-screen w-screen flex flex-col items-center'>
                <div className='w-[80%] flex bg-white mt-4 gap-1'>
                    {sections &&
                        sections.map((item, index) => {
                            const itemStyle = (index + 1) === sectionId ? 'bg-green-400 rounded-3xl text-black' : 'text-green-300';
                            return (
                                <p
                                    key={item.sectionId}
                                    className={`px-3 py-2 rounded-3xl cursor-pointer  ${itemStyle}`}
                                    onClick={() => {

                                        setSectionId(item.sectionId)
                                    }}
                                >
                                    {item.name}
                                </p>
                            );
                        })
                    }
                </div>

                <div className='w-[80%] bg-white mt-4'>
                    <h2
                        className='text-2xl font-bold mt-5 ml-4'
                    >
                        {`Section ${sectionId} Dashboard`}
                    </h2>

                    <div className='mt-5 ml-4 mb-5 flex gap-2 items-center'>
                        <div className='p-1 box-content rounded-full border-2 border-gray-400 inline-block cursor-pointer'>
                            <FaSearch />
                        </div>

                        <div className='flex gap-2'>
                            {subSections &&
                                subSections.map((item, index) => {
                                    const itemStyle = (index + 1) === subSectionId ? 'bg-blue-600 rounded-3xl text-black' : 'bg-gray-400';
                                    return (
                                        <p
                                            key={item.subSectionId}
                                            className={`px-3 py-1 rounded-3xl border-2 border-black  cursor-pointer  ${itemStyle}`}
                                            onClick={() => setSubSectionId(item.subSectionId)}
                                        >
                                            {item.name}
                                        </p>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>


                <div className='bg-gray-100 w-[80%] mt-5 h-56 border-2 border-gray-400'>
                    {chartData ? <LineChart chartData={chartData} /> : 'loading....'}
                </div>


            </div>
        </>
    )
}

export default Page