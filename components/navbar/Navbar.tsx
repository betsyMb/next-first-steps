import React from 'react';
import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "../index"

const navItems = [
    {path: "/contact", text: "Contact"},
    {path: "/about", text: "About"},
    {path: "/pricing", text: "Pricing"},
]

export function Navbar() {
    return (
        <nav className={"flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded"}>
            <Link href={"/"} className={"flex items-center"}>
                <HomeIcon className={"mr-2"}/>
                <span>Home</span>
            </Link>
            <div className={"flex-1"}></div>
            {navItems.map((navItem) => (
                <ActiveLink key={navItem.path} {...navItem} />
            ))}
        </nav>
    );
}