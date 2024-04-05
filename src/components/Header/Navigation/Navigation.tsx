"use client";

import ContentWrapper from "@/components/UI/ContentWrapper/ContentWrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "../Menu/Menu";
import BurgerMenu from "@/components/UI/Icons/BurgerMenu";
import CloseButton from "@/components/UI/Icons/CloseButton";

const Navigation = () => {
    const navigationItems: { title: string; href: string }[] = [
        {
            title: "menu",
            href: "/",
        },
        {
            title: "book now",
            href: "/",
        },
        {
            title: "gift cards",
            href: "/",
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="py-5 flex justify-between items-center border-b-[1px] gray-border font-arsenal">
            <button>
                <Image
                    src="/terre-logo.png"
                    alt="Terre logo"
                    width="100"
                    height="40"
                    style={{ width: "100%", height: "auto" }}
                />
            </button>

            <ul className="lg:flex hidden gap-14">
                {navigationItems.map(({ title, href }) => (
                    <li key={title}>
                        <Link className="hover:underline" href={href}>
                            {title}
                        </Link>
                    </li>
                ))}
                <li>
                    <button>
                        <Image
                            src="/flag.jpg"
                            alt="Language"
                            width="32"
                            height="32"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </button>
                </li>
            </ul>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white p-2 lg:hidden visible h-10 w-10 flex justify-center items-center"
            >
                {isMenuOpen ? <CloseButton /> : <BurgerMenu />}
            </button>

            {isMenuOpen && <Menu navigationItems={navigationItems} />}
        </nav>
    );
};

export default Navigation;
