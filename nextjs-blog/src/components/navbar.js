"use client";

import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'

import Container from '@mui/material/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


const pages = ['Home', 'Reports'];

const Navbar = () => {

    const [activeTab, setActiveTab] = useState('/');

    return (
        <>
            {/* <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: "5px" }}>
                            <Link href={"/"}>
                                <Button
                                    variant='contained'
                                    onClick={handleHomeClick}
                                    sx={{ my: 2, color: 'white', padding: "15px", backgroundColor: "grey" }}
                                >
                                    Home
                                </Button>
                            </Link>

                            <Link href={"/reports"}>
                                <Button
                                    variant='contained'
                                    onClick={handleReportClick}
                                    sx={{ my: 2, color: 'white', padding: "15px", backgroundColor: "white", color: "green" }}
                                >
                                    Reports
                                </Button>
                            </Link>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar> */}

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
                        {/* <div className='p-6 text-green-500 font-bold border-b-4 border-green-500'
                            className = {``}

                        >
                            Reports
                        </div> */}
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