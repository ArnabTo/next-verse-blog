'use client'
import Link from "next/link";
import { Button } from "../ui/button";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";

const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <div className="md:hidden">
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
                                <div className="m-auto"><Image src='https://i.ibb.co/6rDQ2vR/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo-3-removebg-preview.png' width={200}  height={100} alt="logo"/></div>
                                </Link>
                                <Link href='/'>Home</Link>
                                <Link href='/'>Blogs</Link>
                                <Link href='/'>Prodcasts</Link>
                                <Link href='/'>Contact</Link>
                                <Link href='/'>About</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className=" hidden md:flex justify-center ">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blogs
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Procasts
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="m-auto"><Image src='https://i.ibb.co/6rDQ2vR/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo-3-removebg-preview.png' width={200}  height={100} alt="logo" /></div>
                                    </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Documentation
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

        </div>
    );
};

export default Nav;