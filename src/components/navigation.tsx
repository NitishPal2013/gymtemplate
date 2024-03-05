"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button'
import { PhoneCall, MapPin } from 'lucide-react';

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="text-[#3367d6]   border-b-2 border-slate-200">
                <div className="container mx-auto flex items-center justify-between p-2">

                    <div className='flex items-start'>
                        <span className="text-xl  font-bold cursor-pointer dark:text-orange-400 ">
                            US Gynasium
                        </span>
                        <Button variant="ghost" size="default" className='dark:text-blue-400 ml-2' >
                            <Link href="https://www.google.com/maps/dir//US+GYMNASIUM/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc5db221e1fab99:0xe5e60b898a66c2b2!2m2!1d75.9582317!2d17.6623513">
                            <MapPin className="h-[1.2rem] w-[1.2rem] ml-1" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="default" className='dark:text-blue-400'>
                            <Link href="tel:+91-99707-93972">
                            <PhoneCall className="h-[1.2rem] w-[1.2rem] ml-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4 dark:text-orange-400">
                        <Link href="#homepage">
                            <span className=" hover:text-gray-600 cursor-pointer">Home</span>
                        </Link>
                        <Link href="#contact">
                            <span className=" hover:text-gray-600 cursor-pointer">Contact Us</span>
                        </Link>
                        <Link href="#testimonials">
                            <span className=" hover:text-gray-600 cursor-pointer">Testimonials</span>
                        </Link>
                        <Link href="#gallery">
                            <span className=" hover:text-gray-600 cursor-pointer">Gallery</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <Menubar className='md:hidden dark:text-orange-400'>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </MenubarTrigger>
                            <MenubarContent>
                                <Link href="#homepage">
                                <MenubarItem>
                                    Home 
                                </MenubarItem>
                                </Link>
                                <Link href="#testimonials">
                                <MenubarItem>
                                    Testimonials
                                </MenubarItem>
                                </Link>
                                <Link href="#gallery">
                                <MenubarItem>
                                    Gallery
                                </MenubarItem>
                                </Link>
                                <Link href="#contact">
                                <MenubarItem>
                                    Contact Us
                                </MenubarItem>
                                </Link>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </nav>
        </>
    );
};

export default Navigation;

