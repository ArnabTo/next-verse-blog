'use client'
import Link from "next/link";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import { Button } from "../ui/button";

const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger className=' mx-4 my-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                                <path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent side='left'>
                            <div className="grid gap-2 py-6">
                                <Link href='/'>

                                </Link>
                                <Link href='/'>Home</Link>
                                <Link href='/'>Blogs</Link>
                                <Link href='/'>Prodcasts</Link>
                                <Link href='/'>Contact</Link>
                                <Link href='/'>About</Link>
                                <div className="m-auto"><form className="flex"><input className="border-[1px] border-[black] rounded-[15px] px-2 py-1 mr-2 w-[80%]" type="text" placeholder="search" /><Button className=' rounded-[15px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"}>
                                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </Button></form></div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="flex m-auto"><Image src='https://i.ibb.co/6rDQ2vR/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo-3-removebg-preview.png' width={200} height={100} alt="logo" /></div>
                </div>
                <div className=" hidden md:flex ">
                    <div className="m-auto"><Image src='https://i.ibb.co/6rDQ2vR/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo-3-removebg-preview.png' width={200} height={100} alt="logo" /></div>
                    <div className="m-auto">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        <span className="text-[gray]">Home</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <span className="text-[gray]">Blogs</span>
                                        
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <span className="text-[gray]">Procasts</span>
                                                                     
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <span className="text-[gray]">Shop</span>
                                                                     
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <span className="text-[gray]">Contact</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="m-auto"><form className="flex"><input className="border-[1px] border-[black] rounded-[15px] px-2 py-1 mr-2" type="text" placeholder="search" /><Button className=' rounded-[15px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"}>
                            <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </Button></form></div>
                </div>
            </div>

        </div>
    );
};

export default Nav;